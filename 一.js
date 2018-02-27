store
// import {createStore} from 'redux'
// const store=createStore(fn);
// const state=store.getState();
var factorial=function fac(n){
    return n<2?1:n*fac(n-1)
    console.log(factorial(3))
}