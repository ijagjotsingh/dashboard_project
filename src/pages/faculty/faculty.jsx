import FacultyCard from "../../components/facultyCard/facultyCard";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import facultyData from "../../components/facultyCard/facultyData";
import "./faculty.css"

function Faculty(){
    return(
        <div className="faculty">
            <Sidebar/>
            <div className="facultyContainer">
                <Navbar/>
                    <div className="facultyHeading">
                        <div className="intro">Meet your Faculty </div>
                    </div>
                    <div className="facultyItem">
                        {facultyData.map(facultyDetail=>(   
                        <FacultyCard
                            image = {facultyDetail.image}  
                            name = {facultyDetail.name}
                            email = {facultyDetail.email}
                            phone = {facultyDetail.phone}
                            subject = {facultyDetail.subject}
                            education = {facultyDetail.education}
                            experience = {facultyDetail.experience}
                        />
                        ))}
                    </div>
            </div>
        </div>
    )
}

export default Faculty;