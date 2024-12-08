function Food(){
    //if adding js outside return we do not need {}
    const food1 = "Orange";
    const food2 = "Banana";
    return(
        //if adding js inside return we need {}
        <ul>
            <li>Apple</li>
            {/*use {} to add js inside HTML*/
            }
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
        
    );
}

export default Food;