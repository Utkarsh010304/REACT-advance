import { useLocation, useNavigate } from "react-router-dom";
import Header from "../Blogs/Header";
import Blogs from "../Blogs/Blogs";
import Footer from "../Blogs/Footer";
function TagPage(){
    const navigate=useNavigate();
    const location=useLocation();
    const tag=location.pathname.split("/".at(-1));
    return(
        <div>
            <Header/>
            <div>
                <button onClick={()=>navigate(-1)}>
                    Back
                </button>
                <h2>
                    Blogs Tagged<span>#{tag}</span>
                </h2>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    );
}
export default TagPage;