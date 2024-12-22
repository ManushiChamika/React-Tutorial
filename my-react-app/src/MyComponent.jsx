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


    //-----------------------------------------------------
    //updater functions = functions that are used to update the state of a variable
    // a function as an argument to setState() usually ex: setYear (arrow function: y => y + 1) allow for safe updates and 
    // asynchronous functions. Good practice to use updater functions to update state variables
    //-------------------------------------------------------
    const [count , setCount] = useState(0);


    function increment(){
        //uses the current state to calculate the NEXT state
        //set functions do not trigger an update
        //react batches state updates for performance reasons
        // NEXT state becomes the current state after an update


        // setCount(c + 1); This wont update it three times , so use updater functions as below to do so
        setCount(c => c + 1);
        //update
        setCount(c => c + 1);
        //update
        setCount(c => c + 1);

    }

    function decrement(){
        setCount(c=> c - 1);    
        setCount(c=> c - 1);    
        setCount(c=> c - 1);    
    }

    function reset(){
        //no need updater function in this
        setCount(0);
    }

    //---------------------------------------------------------
    //update objects in state

    const [car, setCar] = useState({year: 2024, make : "ford" , model : "mustang"});

    //change the above information dynamically through the below functions
    function handleYearChange(event){
        //... using this to copy the existing object and then update the year
        //...c = current car object
        //...c = ({...c, year: event.target.value}) = copy the current object and update the year
        //helps keep the default state
        //... called the spread operator
        setCar(c => ({...c, year: event.target.value}));

    }
    function handleMakeChange(event){
        setCar(c => ({...c, make: event.target.value}));
        
    }
    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
        
    }

    //---------------------------------------------------------

    //-----------------------------------------------------------
    //arrays in state

    const [foods, setFoods] = useState(["Apple", "Banana", "Orange"]);

    function handleAddFood(){
        const newFood = document.getElementById("foodInput").value;
        //reset the input field
        document.getElementById("foodInput").value = "";

        //using the spread operator to copy the existing array and add the new food
        //----------------------------------------------
        // setFoods([...foods, newFood]);
        //----------------------------------------------
        //the above represents something like this below
        //setFoods(["Apple", "Banana", "Orange", newFood]);
        //to make it easier we use the spread operator

        //use updater function
        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index){
        //_ is used to represent ignored values
        setFoods(foods.filter((_, i) => i!== index));
    }


    //-----------------------------------------------------------
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

        {/* updater functions = functions that are used to update the state of a variable */}
        <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>


        {/* update objects in state */}
        <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        <input type= "number" value={car.year} onChange = {handleYearChange}/><br/>
        <input type= "text" value={car.make}  onChange = {handleMakeChange}/><br/>
        <input type= "text" value={car.model}  onChange = {handleModelChange}/><br/>


        {/* arrays in state */}
        <h2>List of foods</h2>
        <ul>
            {foods.map((food, index) => <li key={index} onClick={() => handleRemoveFood(index)}>
                                            {food}
                                        </li>)}
        </ul>
        <input type="text" id="foodInput" placeholder="Enter food name"/>
        <button onClick={handleAddFood}> Add Food </button>
    </div>


    
    );
}

export default MyComponent;