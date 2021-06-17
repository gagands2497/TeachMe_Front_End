import './Prompt.css'
import Button from '../Button/Button';
const Prompt = (props) => {

    //use useEffect to change the background blur   

    return (  
        <div id="prompt">
            <div id="message">
                <h1>{ props.header ? props.header : "Warning"}</h1>
                <h2>{props.children}</h2>
            </div>
            <div id="understood-btn"><Button color = "magenta">Understood</Button></div>
        </div>
    );
}
 
export default Prompt;