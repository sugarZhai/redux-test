import { createSotre} from 'redux'
const store=createStore(reducer);//生成
let {subscribe,dispatch,getState}=createStore(reducer);
const createStore=(reducer)=>{
  let state;
  let listeners=[];
  const getState=()=>state;
  const dispatch=(action)=>{
    state=reducer(state,action);
    listeners.forEach(listener=>listener());
  };
  const subscribe=(listener)=>{
    listener.push(listener);
    return ()=>{
      listener=listeners.filter(l=>l!==listener);
    }
  };
  dispatch({});
  return {getState,dispatch,subscribe};
};
store.subscribe(listener)
//只要把 View 的更新函数（对于 React 项目，
// 就是组件的render方法或setState方法）
// 放入listen，就会实现 View 的自动渲染。
let unsubscribe=store.subscribe(()=>{
  console.log(store.getState())
})
unsubscribe();
// store.dispatch({
//   type:'ADD_TODO',
//   payload:'Learn Redux'
// })
store.dispatch(addTodo('Learn Redux'))
const state = store.getState();//取state
// store.dispatch()是 View 发出 Action 的唯一方法
// Action 就是 View 发出的通知，表示 State 应该要发生变化
//Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。
// 这种 State 的计算过程就叫做 Reducer。
const reducer=function(state,action){
  //...
  return new_state
}
const defaultState=0;
const reducer = (state=defaultState,action)=>{
  switch(action.type){
    case'ADD':
      return state+action.payload;
    default:
      return state;
  }
}
const chatReducer=(state=defaultState,action={})=>{
  const {type,payload}=action;
  switch(type){
    case ADD_CHAT:
      return Object.assign({},state,{
        chatLog:state.chatLog.concat(payload)
      });
    case CHANGE_STATUS:
      return Object.assign({},state,{
        statusMessage:payload
      });
    case CHANGE_USERNAME:
      return Object.assign({},state,{
        userName:payload
      })
    default:return state
  }
}
const chatReducer=(state=defaultState,action={})=>{
  return {
    chatLog:chatLog(state.chatLog,action),
    statusMessage:statusMessage(state.statusMessage,action),
    userName:userName(state.userName,action)
  }
}
//Redux 提供了一个combineReducers方法，用于 Reducer 的拆分
import {combineReducers } from 'redux'
const chatReducer = combineReducers({
  chatLog,
  statusMessage,
  userName
})
export default todoApp

const reducer = combineReducers({
  a:doSomethingWithA,
  b:processB,
  c:c
})
// combineReducers的简单原理
const combineReducers = reducers=>{
  return (state = {},action)=>{
    return Object.keys(reducers).reduce(
      (nextState,key)=>{
        nextState[key]=reducers[key](state[key],action);
        return nextState;
      },
      {}
    )
  }
}
const state =reducer(1,{
  type:'ADD',
  payload:2
})
3
const ADD_TODO='添加 TODO';
function addTodo(text){
  return {
    type:ADD_TODO,
    text
  }
}
const action=addTodo('Learn Redux');
// 流程
// 1、首先，用户发出 Action
store.dispatch(action);
let nextState=todoApp(previousState,action);
store.subscribe(listener);
function listerner(){
  let newState=store.getState();
  component.setState(newState);
}
