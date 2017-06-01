import React from 'react'
import store from './redux/store'
class Form extends React.Component{
  constructor(){
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleSubmit(e){
    e.preventDefault()
    let value = this.refs.input.value.trim()
    if(value){
      store.dispatch({
        type:'ADD_CONTENT',
        content: value,
        id:Date.now()
      })
      this.refs.input.value=''
    }
  }
  render(){
    return (
      <div className="form">
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="请输入" className="text-input" ref="input"/>
            <input type="submit" className="submit" value=""/>
          </form>
        </div>
      </div>
    )
  }
}

export default Form
