//using useState

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

    return (<div>
        <p>Name: {name}</p>
        <button onClick = {updateName}>Set Name</button>
        <p>Age: {age}</p>
        <button onClick = {incrementAge}>Increment age</button>
        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick = {toggleEmployedStatus}>Toggle status</button>
    </div>
    );
}

export default MyComponent;