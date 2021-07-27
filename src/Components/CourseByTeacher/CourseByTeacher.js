import base_url from '../../../../base_url';
import CourseCard from '../CourseCard/CourseCard';
import './CourseByTeacher.css';


const CourseByTeacher = (props) => {
    const email_id = props.email_id;
    const [Courses, setCourses] = useState([]);
    const [errors, seterrors] = useState([]);

    useState(() => {
        const url = `${base_url}/course/course_by_teacher?email_id=${email_id}`;
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }

        fetch(url, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                if (!data.errors) {
                    setCourses(data.Courses);
                } else {
                    seterrors(data.errors);
                }
            })
            .catch(err => {
                err.data = [{
                    msg: err.message ? err.message : "Server is offline"
                }]
                seterrors([err]);
            })
    }, []);

    const renderCourses = () => {
        return Courses.map(Course => {
            <CourseCard
                CourseName={Course.course_name}
                CourseTopic={Course.course_topic}
                CourseDescription={Course.description}
            />
        })
    }


    return (
        <div id="course_by_teacher">
            {renderCourses()}
        </div>

    );
}

export default CourseByTeacher;