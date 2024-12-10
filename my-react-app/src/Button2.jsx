// function Button2() {
//     // return 
//     // this is wrong, it will not render anything
//     //Always wrap multi-line JSX in parentheses and ensure there is no newline after return. This avoids ambiguity and ensures the code behaves as expected.
//     //    ( <button>
//     //         click me!
//     //     </button>
//     // );

//         // const handleClick = () => console.log("OUCH!");

//         // const handleClick2 = (name) => console.log(`${name} stop clicking me`);

//         let count =0;

//         const handleClick = (name) => {
//             if(count < 3){
//                 count++;
//                 console.log(`${name} you clicked me ${count} times`);
//             }else {
//                 console.log(`${name} stop clicking me!`);
//             }
//         }

//         return (
//             //using {} => will stop from calling the function right away
//             // <button onClick={() => handleClick2("manu")}> 
//             //     click me **
//             // </button>
//             <button onClick={() => handleClick("manu")}> 
//                  click me **
//             </button>
//         );
       
// }
// export default Button2;

//onclick event handler
function Button2() {
       
        //event can be also written as e
        const handleClick = (event) => event.target.textContent = "OUCH!";// changing click me to OUCH!

        return (
            
            // <button onClick={(event) => handleClick(event)}> 
            //      click me **
            // </button>

            //using double click event handler
            <button onDoubleClick={(event) => handleClick(event)}> 
                 click me **
            </button>
        );
       
}
export default Button2;