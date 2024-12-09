import styles from './Button.module.css';

//modules are used for uniqueness of class names
//using it need a setup and global css is not allowed so we must import css file in the same folder
function Button(){
    return (
        <button className={styles.button}>Click me!</button>
    );
}

export default Button;  