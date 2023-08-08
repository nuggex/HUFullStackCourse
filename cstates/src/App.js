import {useState} from 'react';

const App = (props) => {
    const [counter, setCounter] = useState(0);
    console.log('rendering with counter value', counter);
    const Display = ({counter}) => <div>{counter}</div>

    const increaseByOne = () => {
        console.log('increasing, value before', counter);
        setCounter(counter + 1);
    }
    const setToZero = () => {
        console.log('zeroing, value before', counter);
        setCounter(0);
    }
    const decreaseByOne = () => {
        console.log('decreasing, value before', counter);
        setCounter(counter - 1);
    }

    const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

    return (
        <div>
            <Display counter={counter}/>
            <Button
                handleClick={increaseByOne}
                text='plus'
            />
            <Button
                handleClick={decreaseByOne}
                text='minus'
            />
            <Button
                handleClick={setToZero}
                text='zero'
            />
        </div>
    )
}

export default App;