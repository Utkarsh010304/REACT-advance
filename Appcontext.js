import { createContext, useState } from "react";
import { baseurl } from "../BlogsUrl";
import { useNavigate } from "react-router-dom";

export const Appcontext=createContext();

export default function AppcontextPro({children}){
    const [loading,setloading]=useState(false);
    const [posts,setPosts]=useState([]);
    const [page,setPage]=useState(1);
    const [totalPages,setTotalPages]=useState(null);
    const navigate=useNavigate();

    async function FetchInfo(page=1,tag=null,category){
        setloading(true);
        let url=`${baseurl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }

        try{
            const res=await fetch(url);
            const data=await res.json();
            if(!data.posts || data.posts.length===0)
                throw new Error("something went wrong")
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages)
        }
        catch(err){
            console.log("error in fetching data",err);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setloading(false);
    }
    function HandlePageChange(page){
        navigate({search:`page=${page}`})
        setPage(page);
        
    }

    const values={
    posts, setPosts,
    loading,setloading,
    page,setPage,
    totalPages,setTotalPages,
    FetchInfo,HandlePageChange
    };
    return <Appcontext.Provider value={values}>
        {children}
    </Appcontext.Provider>
}
