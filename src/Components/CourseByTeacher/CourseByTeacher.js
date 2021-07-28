import React from 'react';
import './CourseByTeacher.css';
import CourseByTeacherCard from '../CourseByTeacherCard/CourseByTeacherCard';

const CourseByTeacher = () => {
    return (
        <React.Fragment>
            <div className="CourseByTeacher_main">
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
                <CourseByTeacherCard course_name="Web Developmeny Bootcamp" course_topic="React Js" link="https://www.youtube.com/watch?v=3-KVVjo-0DI" />
            </div>
        </React.Fragment>
    )
}

export default CourseByTeacher;









// import { useEffect } from 'react';
// import base_url from '../../../../base_url';
// import CourseCard from '../CourseCard/CourseCard';
// import './CourseByTeacher.css';


// const CourseByTeacher = (props) => {
//     const email_id = props.email_id;
//     const [Courses, setCourses] = useState([]);
//     const [errors, seterrors] = useState([]);

//     useState(() => {
//         const url = `${base_url}/course/course_by_teacher?email_id=${email_id}`;
//         const options = {
//             method: 'GET',
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         }

//         fetch(url, options)
//             .then(response => {
//                 return response.json();
//             })
//             .then(data => {
//                 if (!data.errors) {
//                     setCourses(data.Courses);
//                 } else {
//                     seterrors(data.errors);
//                 }
//             })
//             .catch(err => {
//                 err.data = [{
//                     msg: err.message ? err.message : "Server is offline"
//                 }]
//                 seterrors([err]);
//             })
//     }, []);

//     const renderCourses = () => {
//         return Courses.map(Course => {
//             <CourseCard
//                 CourseName={Course.course_name}
//                 CourseTopic={Course.course_topic}
//                 CourseDescription={Course.description}
//             />
//         })
//     }


//     return (
//         <div id="course_by_teacher">
//             {/* {renderCourses()} */}
//             Holla
//         </div>

//     );
// }

// export default CourseByTeacher;