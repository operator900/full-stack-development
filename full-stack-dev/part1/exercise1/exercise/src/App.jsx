const Header = (head) => {
  console.log(head)
  return (
    <div>
      <h1>{head.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <p> {props.part1} {props.exercises1} </p>
      <p> {props.part2} {props.exercises2} </p>
      <p> {props.part3} {props.exercises3} </p>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises: {total.exercises1 + total.exercises2 + total.exercises3}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack Application Development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using Props to pass data'
  const exercises2 = 7
  const part3 = 'State of component'
  const exercises3 = 14

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {part1} part2 = {part2} part3 = {part3} exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

export default App
