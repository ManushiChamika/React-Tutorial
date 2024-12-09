
function List(){

    const fruits =["apple", "banana", "cherry", "date", "elderberry"];

    const listItems = fruits.map(fruit => <li>{fruit}</li>)

    return (
        fruits
    );
}

export default List;