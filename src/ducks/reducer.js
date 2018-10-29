let initialState = {
    todoItems: ["take out the trash"]
}

let ADD_NEW_ITEM = "ADD_NEW_ITEM"
let REMOVE_ITEM = "REMOVE_ITEM"

export default function reducer(state = initialState, action){
    switch(action.type){
        case ADD_NEW_ITEM:
            return {...state, todoItems: [...state.todoItems, action.payload]}
        case REMOVE_ITEM:
            let list = [...state.todoItems]
            list.splice(action.payload, 1)
            return {...state, todoItems: list}
        default:
            return state;
    }

}

export function addTodoItem(newItem){
    return{
        type: ADD_NEW_ITEM,
        payload: newItem
    }
}

export function removeItem(index){
    return {
        type: REMOVE_ITEM,
        payload: index
    }
}

