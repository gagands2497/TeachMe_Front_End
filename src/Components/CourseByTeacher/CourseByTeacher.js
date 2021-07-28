import React, { useEffect, useState } from 'react';
import './CourseByTeacher.css';
import CourseByTeacherCard from '../CourseByTeacherCard/CourseByTeacherCard';
import base_req_url from '../../base_req_url'
import Error from '../Error/Error';
import Loading from '../Loading/Loading';

const CourseByTeacher = ({ email_id }) => {
    const [isLoading, setisLoading] = useState(false);
    const [errors, seterrors] = useState([])
    const [courses, setcourses] = useState([])
    useEffect(() => {
        setisLoading(true)
        const options = {
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }

        const url = `${base_req_url}/course/course_by_teacher/?email_id=${email_id}`;

        fetch(url, options)
            .then(response => {
                return response.json();
            })
            .then(data => {
                setisLoading(false);
                if (data.errors) {
                    seterrors(data.errors)
                } else {
                    setcourses(data.Courses)
                }
            })
            .catch(err => {
                const error = new Error("Server is offline");
                error.data = [{
                    msg: err.message ? err.message : "Server is offline"
                }]
                seterrors([err]);
            })
    }, [])

    const renderErrors = () => {
        if (errors.length === 0) {
            return <div></div>
        } else {
            return <Error errors={errors} />
        }
    }
    return (
        <React.Fragment>
            {renderErrors()}
            {isLoading && <Loading />}
            <div className="CourseByTeacher_main">
                {
                    courses.map(course => {
                        return <CourseByTeacherCard
                            course_name={course.course_name}
                            course_topic={course.course_topic}
                            link={course.storage_link} />
                    })
                }
            </div>
        </React.Fragment>
    )
}

export default CourseByTeacher;








