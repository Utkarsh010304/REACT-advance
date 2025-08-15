import react from "react";
import Card from "./Card"

const Cards=({courses})=>{
    let allCourse=[];
    const getCourses=()=>{
        Object.values(courses).forEach((courseCat)=>{
            courseCat.forEach((course)=>{
                allCourse.push(course);
            })
        })
        return allCourse;
    }
    return(
        <div>
            {!courses ? (
                <div>
                    <p>no data found</p>
                </div>
            ):(getCourses().map((course)=>{
                return <Card  key={course.id} course={course}/>
            }))}
        </div>
    );
}
export default Cards