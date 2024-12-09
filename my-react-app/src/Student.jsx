
//with jsx we have to use className instead of class as class is a reserved keyword in js
import PropTypes from 'prop-types'

function Student(props){
    return (
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            {/*if boolean is not working 
            <p>Student: {props.isStudent}</p>*/}
            {/*us the below method*/}
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}

//if theses are not met , the console will show a warning but it will compile
Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool
}

Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false
}

export default Student;