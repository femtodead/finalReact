
import {  useDispatch, useSelector } from "react-redux";
import { EdPoduct, saveProd } from "../actions/listActionts";
import { useState } from "react";

function EditList(props) {
   
    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [available , setAvailable] = useState('')
    // const list = useSelector(state => state.list);
    const dispatch = useDispatch();
    
    const red = (e) => {
        const id = e.target.id.split('red')[1];
        dispatch(EdPoduct(id))
    }
    const save = (e) =>{
        if (name == ''|| description == ''|| price == ''|| available == '') {
            alert("Заполните все поля ввода")
        }else{
            const id = e.target.id.split('sav')[1];
            dispatch(saveProd({id: id,name: name ,description: description ,price: price, available: available}))
            e.target.previousElementSibling.click()
        }
        setName('')
        setDescription('')
        setPrice('')
        setAvailable('')
    }



    
    return ( 
        
        <div style={((props.props.id == 0) ? {display:"none"}:{display:"flex"})} >
                            <input style={!props.props.completed?{display:"none"}:{display:"block"}} onChange={(e)=>setName(e.target.value)} value={name}/>
                            <input style={!props.props.completed?{display:"none"}:{display:"block"}} onChange={(e)=>setDescription(e.target.value)} value={description}/>
                            <input style={!props.props.completed?{display:"none"}:{display:"block"}} onChange={(e)=>setPrice(e.target.value)} value={price}/>
                <select style={!props.props.completed?{display:"none"}:{display:"block"}} onChange={(e)=>setAvailable(e.target.value)} value={available}>
                            <option></option>
                            <option>Доступен</option>
                            <option>Не доступен</option>
                </select>
            <button style={(props.props.completed) ? {display:"none"}:{display:"block"}} onClick={red} id={'red'+ props.props.id}>Редактировать</button>
            <button style={(props.props.completed) ? {display:"block"}:{display:"none"}} onClick={save} id={'sav'+ props.props.id}>Сохранить</button>
        </div>
    
     );
}

export default EditList;
