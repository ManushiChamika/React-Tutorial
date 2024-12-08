function Footer(){
    return (
        //Use footer (lowercase) instead of Footer for semantic HTML.
       <footer>
            <p>
                 {/* copy write symbol*/}
                &copy; {new Date().getFullYear()} Website
            </p>
       </footer> 

    );

}

export default Footer