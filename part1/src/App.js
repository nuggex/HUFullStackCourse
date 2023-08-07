const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old</p>
        </div>
    )
}
const Footer = () => {
    return (
        <div>
            greeting app created by <a href='https://github.com/nuggex'>nuggex</a>
        </div>
    )
}


const App = () => {
    const friends = [
        {name: 'Peter', age: 4},
        {name: 'Maya', age: 10}
    ]
    return (
        <div>
            <h1>Greetings</h1>
            <p>{friends[0].name} {friends[0].age}</p>
            <p>{friends[1].name} {friends[1].age}</p>
            <Footer/>
        </div>
    )
};


export default App;