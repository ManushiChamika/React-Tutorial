function Header(){

    return (
        <header>
            <h1>My Website</h1>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <hr/>
        </header>//inside return statement we can write pure HTML
    );
}

//write this so that we can import it elsewhere
export default Header;