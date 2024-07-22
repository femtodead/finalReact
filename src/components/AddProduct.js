import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPoduct } from "../actions/listActionts";
function AddProduct() {
    const [name , setName] = useState('')
    const [description , setDescription] = useState('')
    const [price , setPrice] = useState('')
    const [available , setAvailable] = useState('')
    const dispatch = useDispatch()

    const handlAddList = () =>{
        if (name == ''|| description == ''|| price == ''|| available == '') {
            alert("Заполните все поля ввода")
        } else {
            dispatch(addPoduct({name: name ,description: description ,price: price, available: available}));
        }
        setName('')
        setDescription('')
        setPrice('')
        setAvailable('')
    }
    

    return ( 
        <div>
            
                <input value={name} onChange={(e)=>setName(e.target.value)} placeholder="имя"/>
                <input value={description} onChange={(e)=>setDescription(e.target.value)} placeholder="описание"/>
                <input value={price} onChange={(e)=>setPrice(e.target.value)} placeholder="цена"/>
                <select value={available} onChange={(e)=>setAvailable(e.target.value)} >
                    <option></option>
                    <option>Доступен</option>
                    <option>Не доступен</option>
                </select>
                <button onClick={handlAddList}>Добавить продукт</button>
            
        </div>
     );
}

export default AddProduct;