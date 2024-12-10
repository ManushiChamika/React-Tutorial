import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx' 
import Button1 from './Button1.jsx'
//styling using 1.External css
//              3.Modules
//              3.Inline css


//------------------------------------------------------------------
//props are used to pass data from parent to child components
//propTypes are used to type check the props.....eg; age:PropTypes.number
//defaultProps are used to set default values for the props

//------------------------------------------------------------------
//conditional rendering is used to render components based on conditions(show, hide or change components)

import Student from './Student.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import Button2 from './Button2.jsx'
import ProfilePicture from './ProfilePicture.jsx'

function App() {
 
  //putting {} in the array makes it an object
  const fruits =[{id : 1,name: "apple", calories :95},
                  {id : 2,name: "banana", calories: 67}, 
                  {id : 3,name:"cherry", calories: 166}, 
                  {id : 4,name: "date", calories: 55}, 
                  {id : 5,name: "elderberry", calories: 73}];

  const vegetables =[{id : 6,name: "carrot", calories :45},
                    {id : 7,name: "potato", calories: 60}, 
                    {id : 8,name:"beetroot", calories: 106}, 
                    {id : 9,name: "spinach", calories: 55}, 
                    {id : 10,name: "onion", calories: 73}];

  //return statements only return single elements, so if there are multiple add a fragment <></> to wrap them
  return(  
    <>{/*fragment*/}
      <Header/>
      <UserGreeting isLoggedIn ={true} username="Manu"/>
      <ProfilePicture/>
      {/* <UserGreeting isLoggedIn ={true}/> */}
      <Food/>
      {/*can multiply*/}
      <Food/>
      <Card/>
      <Card/>
      {/*if its string use "" , if not use {} */}
      <Student name = "Manu" age ={30} isStudent={true}/>
      <Student name = "chi" age ={40} isStudent={false}/>
      <Student name = "lili" age ={50} isStudent={false}/>
      <Student name = "sandy" age ={25} isStudent={true}/>
      <Student name="larry"/>
      {/* <List/> */}

      {/* conditional rendering */}
      {/* null means if there is nothing in the array, it will not render */}
      {/* {fruits.length > 0 ? <List items ={fruits} category="fruits"/> : null } */}
      {fruits.length > 0 && <List items ={fruits} category="Fruits"/>} {/*only true statement given known as short circuiting */}
      {vegetables.length > 0 ? <List items ={vegetables} category="Vegetables"/> : null}
      <Button/>
      <Button1/>
      <Button2/>
      <Footer/>
    </>

  );
}

export default App
