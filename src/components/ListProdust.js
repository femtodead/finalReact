import { useDispatch, useSelector } from "react-redux";
import {  delPoduct, izPoduct } from "../actions/listActionts";

import EditList from "./EditList";


function ListProdust() {
    const list = useSelector(state => state.list);
    const dispatch = useDispatch();

    const del = (e) => {
        dispatch(delPoduct(e.target.id.split('del')[1]))
    }
    const iz = (e) => {
        dispatch(izPoduct(e.target.id.split('iz')[1]))
    }


    
   
    return ( 
        <div>
            <h1>Список продуктов:</h1>
            {list.map((el) => <div style={{display:'flex', gap:'30px'}}>
            {console.log(el.completed)}
            <span style={el.completed?{display:"none"}:{display:"block"}}>{el.id}   </span>
                            <span style={el.completed?{display:"none"}:{display:"block"}}>{el.name}  </span>
                            <span style={el.completed?{display:"none"}:{display:"block"}}>{el.description}   </span>
                            <span style={el.completed?{display:"none"}:{display:"block"}}>{el.price}   </span>
                            <span style={el.completed?{display:"none"}:{display:"block"}}>{el.available}   </span>

                            <EditList props={el} />
                            <button style={el.completed?{display:"none"}:{display:"block"}} id={`iz`+ (el.id-1)} onClick={iz}>Изменить доступность</button>
                            <button style={el.completed?{display:"none"}:{display:"block"}} id={`del`+ (el.id-1)} onClick={del} >Удалить элемент</button>
                            </div>
            )}
        </div>
     );
}

export default ListProdust;