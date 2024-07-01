import './styles.css';
import {Fragment, useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    }

    return(
        <Fragment>
            <h2>Задание 2: Счётчик</h2>
            <div className="counter__container">
                <h2>{count}</h2>
                <button onClick={handleClick} style={{background: count < 10 ? 'green' : 'red'}}>Increment</button>
            </div>
        </Fragment>
    );
}