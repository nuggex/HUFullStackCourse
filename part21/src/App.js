const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }
    const Course = ({course}) => {
        const Header = ({course}) => {
            return <h1>{course.name}</h1>
        }
        const Total = ({course}) => {
            return(
                <b>
                   Total exercises: {course.parts.reduce((a, v) => a = a + v.exercises, 0 )}
                </b>
            )
        }
        const Content = ({course}) => {
            const Part = ({part}) => {
                console.log(part)
                return (
                    <li>{part.name} {part.exercises}</li>
                )
            }

            return (
                <ul>
                    {course.parts.map(part =>
                        <Part key={part.id} part={part}/>
                    )}
                </ul>
            )
        }

        return (
            <div>
                <Header course={course}/>
                <Content course={course}/>
                <Total course={course}/>
            </div>
        )
    }
    return <Course course={course}/>
}

export default App