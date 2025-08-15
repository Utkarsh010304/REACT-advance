import './App.css';
import {useContext, useEffect,useState} from 'react';
// import {apiURL,filterData} from "./Data"
// import Navbar from "./components/Navbar";
// import Filter from "./components/Filter";
// import Cards from "./components/Cards";
// import {toast} from "react-toastify";

import BlogPage from './Pages/BlogPage';
import HomePage from './Pages/Homepage';
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage';
import { Appcontext } from './Context/Appcontext';
import { Routes,Route, useSearchParams, useLocation } from 'react-router-dom';


const App =()=> {
  // const [courses,setCourse]=useState(null)
  // const [load,setLoad]=useState(true)
  //   async function fetchData(){
  //     setLoad(true)
  //     try{
  //       const res=await fetch(apiURL);
  //       const op=await res.json();
  //       setCourse(op.data)
  //     }
  //     catch(err){
  //       toast.error("wrong");
  //     }
  //     setLoad(false)
  //   }
  //   useEffect(()=>{
  //     fetchData();
  //   },[])

  const {searchPara,setsearchPara}=useSearchParams();
  const location=useLocation();


  const {FetchInfo}=useContext(Appcontext);
  useEffect(()=>{
    const page=searchPara.get("page") ?? 1;
    if(location.pathname.includes("tags")){
      const tag=location.pathname.split("/").at(-1).replace("-"," ");
      FetchInfo(Number(page),tag);
    }
    else if(location.pathname.includes("categories")){
      const category=location.pathname.split("/").at(-1).replace("-"," ");
      FetchInfo(Number(page),null,category);
    }
    else{
      FetchInfo(Number(page));
    }
  },[location.pathname,location.search])
  return (
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog/:blogId" element={<BlogPage/>}/>
      <Route path="/tags/:tag" element={<TagPage/>}/>
      <Route path="/categories/:category" element={<categoryPage/>}/>
    </Routes>
  );
}



export default App;
