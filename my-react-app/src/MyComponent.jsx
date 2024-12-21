//using useState

//onchange = event handler used primarily with form elements 
            // ex: <input> , <textarea> , <select> , <radio>
            // Triggers a function every time the value of the input changes

import React , {useState} from 'react';

function MyComponent(){
    const [name, setName] = useState("Guest");//initial state is guest
    const [age, setAge] = useState(18);// start at 18
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("manushi chamika");
    }
    const incrementAge = () => {
        setAge(age + 1);
    }
    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    const [pname, pSetName] =useState("Guest");
    const [quantity, pSetQuantity] =useState();
    const [comment, setComment] = useState("");
    //use empty strings below so that u can get the default 'select an option'
    const [payment, setPayment] = useState("");
    //radio buttons
    const [shipping, setShipping] = useState("Delivery");

    function handleNameChange(event){
        pSetName(event.target.value);
    }

    function handleQuantityChange(event){
        pSetQuantity(event.target.value);
    }

    function handleCommentChange(event){
        setComment(event.target.value);
    }

    function handlePayment(event){
        setPayment(event.target.value);
    }

    function handleShippingChange(event){
        setShipping(event.target.value);
    }

    return (<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick = {incrementAge}>Increment age</button>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick = {toggleEmployedStatus}>Toggle status</button>


        <br/><br/>
        <p>------------------------------------------------------</p>
        <input value = {pname}  onChange={handleNameChange}/>
        <p>Name: {pname}</p>

        <input value = {quantity} onChange ={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity}</p>

        {/* textArea */}
        <textarea value ={comment} onChange = {handleCommentChange}
            placeholder ="Enter delivery instructions"
        > </textarea>
        <p>Comment: {comment} </p>

        {/* select */}
        <select value = {payment} onChange = {handlePayment}>
            <option value = "">Select an option</option>
            <option value = "visa">Visa</option>
            <option value = "Mastercard">Mastercard</option>
            <option value = "giftCard">gift card</option>
        </select>
        <p>Payment : {payment}</p>

        {/* radio buttons */}
        <label>
            <input type = "radio" value = "pick up" checked={shipping === "Pick up"} onChange = {handleShippingChange}/>
            Pick up 
        </label><br/>
        <label> 
            <input type = "radio" value = "delivery" checked={shipping === "delivery"} onChange = {handleShippingChange}/>
            Delivery  
        </label>
        <p>Shipping : {shipping}</p>
    </div>
    );
}

export default MyComponent;