import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Button from './Button/Button.jsx' 
import Button1 from './Button1.jsx'
//styling using 1.External css
//              3.Modules
//              3.Inline css

function App() {
 
  //return statements only return single elements, so if there are multiple add a fragment <></> to wrap them
  return(  
    <>{/*fragment*/}
      <Header/>
      <Food/>
      {/*can multiply*/}
      <Food/>
      <Card/>
      <Card/>
      <Button/>
      <Button1/>
      <Footer/>
    </>
    
  );
}

export default App
