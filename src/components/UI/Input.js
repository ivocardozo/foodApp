import classes from './Input.module.css';

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFor={props.id}>{props.label}</label>
            <input key={props.id} {...props.input}/>
        </div>
    )
}

export default Input;