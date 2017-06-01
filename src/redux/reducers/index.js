import { combineReducers } from 'redux'

let todos = [
  {
    content: 'todo1',
    complete: false,
    id:1
  },
  {
    content: 'todo2',
    complete: true,
    id:2
  }
]

let status = 'All'

function todoListReducer(state = todos, action) {
  switch (action.type) {
    case 'CHANGE_COMPLETESTATE':
      let newState = state.map( item=>item.id===action.id ? {...item,complete:!item.complete} : item )
      return newState
    case 'ADD_CONTENT':
      return [...state,{
        content: action.content,
        complete: false,
        id: action.id
      }]
    default:
      return state
  }
}

function statusReducer(state = status, action) {
  switch (action.type) {
    case 'COMPLETION_STATUS':
      return action.status
    default:
      return state
  }
}

const rootReducer = combineReducers({
  todos: todoListReducer,
  status: statusReducer
})

export default rootReducer
