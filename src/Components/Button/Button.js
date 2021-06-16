import './Button.css';

const Button = (props) => {

    const styles = {
        backGroundColor : props.bgColor,
        fontSize : props.FS,
        color:props.color,
        borderColor : props.color
    }

    return (
        <div style = {styles} className = "button" onClick = {props.handler}>{props.children}</div>
    );
}
 
export default Button;