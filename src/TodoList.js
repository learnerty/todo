import React from 'react';
import { connect } from 'react-redux'
import store from './redux/store'

class TodoList extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e){
    store.dispatch({
      type: 'CHANGE_COMPLETESTATE',
      id: parseFloat(e.target.id)
    })
  }
  render(){
    let todos
    if(this.props.status === 'Completed'){
      todos = this.props.todos.filter(item => item.complete)
    }
    if(this.props.status === 'All'){
      todos = this.props.todos
    }
    return (
      <div className="todo-list">
        <div className="container">
          <ul>
            {
              todos.map(item=>
                <li key={item.id} className={item.complete ? "completed" : ""} id={item.id} onClick={this.handleClick}>
                  {item.content}
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  status: state.status
})

export default connect(mapStateToProps)(TodoList)
