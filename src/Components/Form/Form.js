import './Form.css';

const Form = (props) => {
    return (
        <form className = "form">
            <h2>{props.header}</h2>
            {props.children}
        </form>
    );
}
 
export default Form;