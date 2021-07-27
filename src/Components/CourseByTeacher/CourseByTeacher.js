import base_url from '../../../../base_url';
import './CourseByTeacher.css';


const CourseByTeacher = (props) => {
    const email_id = props.email_id;
    const [course_name, setcourse_name] = useState([]);
    useState(() => {
        const url = `${base_url}/course/course_details`
    }, []);
    return (
        <h1>CourseByTeacher</h1>
    );
}
 
export default CourseByTeacher;