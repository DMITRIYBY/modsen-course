import './styles.css';
import {Fragment, useState} from "react";
import {Simulate} from "react-dom/test-utils";


export const Form = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue);
    };

    return (
        <Fragment>
            <h2>Задание 3: Форма</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
                <button type="submit">Submit</button>
            </form>
        </Fragment>
    );
}