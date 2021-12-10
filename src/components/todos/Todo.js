import { Component } from 'react';

class Todo extends Component {
  render() {
    const { id, title, desc, complete, todoClick } = this.props
    return (
      <li style={complete ? {...styles.completed} : null }
      onClick={ () => todoClick(id) }
      >
        <h1>{title}</h1>
        <h5>{desc}</h5>
      </li>
    )
  }
}

const styles = {
  completed: {
    color: 'grey',
    textDecoration: 'line-through'
  }
}

export default Todo;