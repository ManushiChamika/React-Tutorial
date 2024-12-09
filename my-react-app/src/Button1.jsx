
function Button1(){

    //inline css
    //all values should be strings
    //reduces readability in large projects
    const styles={
        backgroundColor: 'black',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    }

    return (
        <button style={styles}>Click me!</button>
    );
}

export default Button1;  