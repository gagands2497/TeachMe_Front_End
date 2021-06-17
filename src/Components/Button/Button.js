import './Button.css';

const Button = (props) => {

    const styles = {
        backgroundColor : props.bgColor,
        fontSize : props.FS,
        color:props.color,
        borderWidth : props.borderWidth,
        borderColor : props.color
    }

    return (
        <div style = {styles} className = "button" onClick = {props.handler}>{props.children}</div>
    );
}
 
export default Button;