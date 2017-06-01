import React from 'react'
import store from './redux/store'
import { connect } from 'react-redux'

class Actions extends React.Component{
  render(){
    return (
      <div className="actions">
        <div className="container">
          <div className="list" onClick={()=>store.dispatch({type:'COMPLETION_STATUS',status:'All'})}></div>
          <div className="completed" onClick={()=>store.dispatch({type:'COMPLETION_STATUS',status:'Completed'})}></div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  todos: state.todos
})
export default connect(mapStateToProps)(Actions)
