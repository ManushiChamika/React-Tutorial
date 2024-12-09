import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'

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
      <Footer/>
    </>
    
  );
}

export default App
