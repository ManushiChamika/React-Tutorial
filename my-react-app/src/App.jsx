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

function App() {
 
  //return statements only return single elements, so if there are multiple add a fragment <></> to wrap them
  return(  
    <>{/*fragment*/}
      <Header/>
      <UserGreeting isLoggedIn ={true} username="Manu"/>
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
      <List/>
      <Button/>
      <Button1/>
      <Footer/>
    </>

  );
}

export default App
