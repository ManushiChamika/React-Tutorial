//making a card component
import profilePic from './assets/img.jpeg';

function Card(){
    return(
        <div className= "card">
            {/*<img src="https:">*/}
            <img className ="card-img" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Manu</h2>
            <p className='card-text'>I make youtube videos</p>
        </div>
    );
}

export default Card;