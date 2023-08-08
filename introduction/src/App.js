const Header = (props) => {
    console.log(props);
    return (
        <h1>{props.course}</h1>
    )
}

const Hello = (props) => {
    return (
        <div>
            <p>
                Hello {props.name}, you are {props.age} years old
            </p>
        </div>
    )
}

const Part = ({part, exercise}) => {
    return (
        <p>{part} {exercise}</p>
    )
}
const Content = ({parts}) => {
    return (
        <div>
            <Part exercise={parts[0].exercises} part={parts[0].name}/>
            <Part exercise={parts[1].exercises} part={parts[1].name}/>
            <Part exercise={parts[2].exercises} part={parts[2].name}/>
        </div>
    )
}

const Total = ({parts}) => {
    const initialValue = 0
    const numberOfExercises = parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, initialValue);
    return (
        <p>Number of exercises {numberOfExercises}</p>
    )
}
const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }

    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default App;