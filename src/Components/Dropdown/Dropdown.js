import { useEffect } from 'react';
import './Dropdown.css';

const Dropdown = (props) => {
    // props.items must have a value and click handler
    const items = props.items //it is a list of objects

    //each items is like {item_id , item_value,item_handler}
    useEffect(()=>[
        //don't change the state of componenet inside useEffect\
        
    ])
    return (
        <div className="dropdown">
            <button className="dropdown-btn">{props.children}</button>
            <ul className="dropdown-items">
                {
                    items.map((item)=>{
                        return <li key = { item['item_id'] } onMouseDown = {item['item_handler']}>{item['item_name']}</li>
                    })
                }
            </ul>
        </div>
    );
}
 
export default Dropdown;