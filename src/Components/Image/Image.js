import './Image.css';

const Image = (props) => {
    let styles = {
        height : props.height,
        width : props.width,
        opacity : props.opacity,
        backgroundSize : "cover"
    }
    return (
        <img style = {styles} id = {props.id} src = {props.image} alt = {props.alt} />
    );
}
 
export default Image;