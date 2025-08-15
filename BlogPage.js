// import { useContext, useEffect, useState } from "react";
// import { useLocation, useNavigation } from "react-router-dom";
// import { Appcontext } from "../Context/Appcontext";
// import { baseurl } from "../BlogsUrl";
// import Header from "../Blogs/Header";
// import BlogDetails from "../Blogs/BlogDetails";

// function BlogPage(){
//     const [blog,setblog]=useState(null);
//     const [relBlogs,setrelBlogs]=useState([]);
//     const location=useLocation();
//     const navigation=useNavigation();
//     const [loading,setloading]=useContext(Appcontext);
//     const blogId=location.pathname.split("/").at(-1);


//     async function fetchRelated(){
//         setloading(true);
//         let url=`${baseurl}?blogId=${blogId}`;
//         try{
//             const res=await fetch(url);
//             const data=await res.json();
//             setblog(data.blog);
//             setrelBlogs(data.relBlogs);
//         }
//         catch(err){
//             console.log("Error Occured",err);
//             setblog(null);
//             setrelBlogs([]);
//         }
//         setloading(false);
//     }
//     useEffect(()=>{
//         if(blogId){
//             fetchRelated();
//         }
//     },[location.pathname])
//     return (
//         <div>
//             <Header/>
//             <div>
//                 <button onClick={()=>navigation(-1)}>
//                     Back
//                 </button>
//             </div>
//             {
//                 loading? 
//                     (<div>
//                         <p>Loading</p>
//                     </div>):
//                     blog?
//                     (<div>
//                         <BlogDetails post={blog}/> 
//                         <h2>Related Blogs</h2>
//                         {
//                             relBlogs.map((post)=>(
//                                 <div key={post.id}>
//                                     <BlogDetails post={post}/>
//                                 </div>
//                             ))
//                         }
//                     </div>):
//                     (<div>
//                         <p>No Blogs Found</p>
//                     </div>)
//                 } 
//             }
//         </div>
//     );
// }
// export default BlogPage;
import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate,useNavigation } from "react-router-dom";
import { Appcontext } from "../Context/Appcontext";
import { baseurl } from "../BlogsUrl";
import Header from "../Blogs/Header";
import BlogDetails from "../Blogs/BlogDetails";

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relBlogs, setRelBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { loading, setloading } = useContext(Appcontext);
    const blogId = location.pathname.split("/").at(-1);


    async function fetchRelated() {
        setloading(true);
        let url=`${baseurl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            setBlog(data.blog);
            setRelBlogs(data.relBlogs);
        } catch (err) {
            console.error("Error fetching blog data:", err);
            setBlog(null);
            setRelBlogs([]);
        } finally {
            setloading(false);
        }
    }
        useEffect(() => {
        if (blogId) {
            fetchRelated();
        }
    }, [location.pathname]);


    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>

            {loading ? (
                <div>
                    <p>Loading...</p>
                </div>
            ) : blog ? (
                <div>
                    <BlogDetails post={blog} />
                    <h2>Related Blogs</h2>
                    {relBlogs.map((post) => (
                        <div key={post.id}>
                            <BlogDetails post={post} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    <p>No Blogs Found</p>
                </div>
            )}
        </div>
    );
}

export default BlogPage;
