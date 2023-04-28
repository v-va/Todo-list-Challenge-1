const initailState = [
    {id: 1, title: 'TodoList 챌린지!', content: 'TodoList 오후 6시 까지 만들기!!', isDone: false},
    {id: 2, title: 'Lv3 과제하기', content: '오늘 안에 Lv3 과제 끝내기(?)', isDone: true},
]

// action value
export const ADD_TODO = "todo/ADD_TODO";

// action creator
export const addTodo = (payload) => {
    return {
        type: ADD_TODO,
        payload,
    }
}

const todolist = (state=initailState, action) => {
  switch (action.type){
    case ADD_TODO:
        return
    default:
        return state;
  }
}

export default todolist
