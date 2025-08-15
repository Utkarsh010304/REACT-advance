import Blogs from "../Blogs/Blogs";
import Footer from "../Blogs/Footer";
import Header from "../Blogs/Header";
import { useLocation, useNavigate } from "react-router-dom";

function CategoryPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const category=location.pathname.split("/").at(-1);
    return(
        <div>
            <Header/>
            <div>
                <button onClick={()=>navigate(-1)}>
                    Back
                </button>
                <h2>
                    Blogs on <span>{category}</span>
                </h2>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    );
}
export default CategoryPage;