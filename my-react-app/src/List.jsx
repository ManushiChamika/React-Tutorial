import propTypes from 'prop-types';

//rendering an array of elements
function List(props){

    // used to pass data from parent to child components
    const category = props.category;
    const itemList = props.items;
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name));   //sorts the array in alphabetical order          
    // fruits.sort((a,b) => b.name.localeCompare(a.name));//sorts the array in reverse alphabetical order
    // fruits.sort((a,b) => a.calories - b.calories); //sorts the array in ascending order of calories
    // fruits.sort((a,b) => b.calories - a.calories); //sorts the array in descending order of calories

    //filter fruits with calories less than 100 and store them in a new array
    // const lowCalFruit = fruits.filter(fruit => fruit.calories < 100);
    // const highCalFruit = fruits.filter(fruit => fruit.calories >= 100);

    //there should a key for each element in the array
    const listItems = itemList.map(item => <li key={item.id}>
                                                    {item.name}: &nbsp;
                                                    <b>{item.calories}</b></li>);    

    return (
        <>
        {/* passing data from parent to child components */}
        <h3 className="list-category">{category}</h3>
        <ul className="list-items">{listItems}</ul>
        </>
    );
}

List.defaultProps = {
    category: "Category",
    // {fruits.length > 0 && <List items ={fruits} category="Fruits"/>}
    // items ={fruits}, if in case the array is missing , we can set a default value, so we don't get an error
    items: []
}
//type checking the props
//good practice to type check the props
List.propTypes = {
    category: propTypes.string,
    items: propTypes.arrayOf(propTypes.shape({id: propTypes.number.isRequired,
                                            name: propTypes.string.isRequired,
                                            calories: propTypes.number.isRequired
    }))
}
export default List;