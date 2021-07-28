import './Courses.css';
import CourseCard from '../CourseCard/CourseCard';
import Error from '../Error/Error';
const Courses = (props) => {
    // please handle errors after completeing basic
    return (
        <div id="Courses">
            {
                props.courses.map(function (course) {
                    return <CourseCard email_id = {course.email_id} CourseName={course.course_name} CourseTopic={course.course_topic} CourseDescription={course.description} />
                })
            }
        </div>
    );
}

export default Courses;