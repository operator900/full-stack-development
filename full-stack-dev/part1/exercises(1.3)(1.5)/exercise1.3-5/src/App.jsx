const Header = (props) => {
  //console.log(head)
  return (
    <div>
      <h1>{props.head.name}</h1>
    </div>
  )
}

const Content = (props) => {
  //console.log(props)
  console.log(props.parts.parts[0].name)
  return (
    <div>
      <p>{props.parts.parts[0].name} {props.parts.parts[0].exercises}</p>
      <p>{props.parts.parts[1].name} {props.parts.parts[1].exercises}</p>
      <p>{props.parts.parts[2].name} {props.parts.parts[2].exercises}</p>
    </div>
  )
}

const Total = (total) => {
  return (
    <div>
      <p>Number of exercises: {total.parts.parts[0].exercises + total.parts.parts[1].exercises + total.parts.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack Application Development',
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
  //console.log(course.name)
  //console.log(course.parts)

  return (
    <div>
      <Header head = {course} />
      <Content parts = {course} />
      <Total parts = {course} />
    </div>
  )
}

export default App
