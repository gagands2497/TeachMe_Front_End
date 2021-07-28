import "./Error.css";
import { useState, useEffect } from "react";
import $ from 'jquery';

const Error = (props) => {
    console.log(props.errors);
    const [errors, seterrors] = useState(props.errors)

    useEffect(() => {
        if (errors.length !== 0)
            $("body > #root > *:not(.errors)").css("filter", "blur(40px)");
        else
            $('body').css("filter", "blur(0px)");

    })

    if (errors.length === 0) {
        return <div></div>
    }
    else {
        return (

            <div className="errors">
                {
                    errors.map(error => {
                        return <div className="error">
                            {error.msg ? error.msg : error.message}
                        </div>
                    })
                }
                <button onClick={(e) => {
                    e.preventDefault();
                    seterrors([]);
                    $("body > #root > *:not(.errors)").css("filter", "blur(0px)");
                }}>Understood</button>
            </div>
        );
    }
}

export default Error;