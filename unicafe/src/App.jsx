import {useState} from 'react'


const StatisticsLine = (props) => {

    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}
const Statistics = (props) => {

    if (props.good + props.neutral + props.bad > 0) {
        return (
            <div>
                <h2>stats</h2>
                <table>
                    <tbody>
                    <StatisticsLine text="good" value={props.good}></StatisticsLine>
                    <StatisticsLine text="neutral" value={props.neutral}></StatisticsLine>
                    <StatisticsLine text="bad" value={props.bad}></StatisticsLine>
                    <StatisticsLine text="all" value={props.good + props.neutral + props.bad}></StatisticsLine>
                    <StatisticsLine text="average" value={Math.round(((props.good + (props.bad * -1)) / (props.good + props.neutral + props.bad)) * 100) / 100}></StatisticsLine>
                    <StatisticsLine text="positive" value={Math.round((props.good / (props.good + props.bad + props.neutral)) * 100) + " %"}></StatisticsLine>
                    </tbody>
                </table>
            </div>
        )
    } else {
        return <div>
            No feedback given <br/>
        </div>
    }
}
const App = () => {

    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    let props = {good, neutral, bad};
    return (
            <div>
                <h1>give feedback</h1>
                <button
                    onClick={() => setGood(good + 1)}
                >good
                </button>

                <button onClick={() => setNeutral(neutral + 1)}
                >neutral
                </button>

                <button onClick={() => setBad(bad + 1)}
                >bad
                </button>


                <Statistics {...props}></Statistics>
            </div>
    )
}

export default App