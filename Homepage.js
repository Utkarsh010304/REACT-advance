import Header from "../Blogs/Header";
import Blogs from "../Blogs/Blogs";
import Footer from "../Blogs/Footer";
function HomePage(){
    return(
        <div>
            <Header/>
            <div>
                <Blogs/>
                <Footer/>
            </div>
        </div>
    );
}
export default HomePage;