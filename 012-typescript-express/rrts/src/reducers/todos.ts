import { Todo, TodoAction, ActionTypes } from '../actions';

export const todosReducer = (state: Todo[] = [], action: TodoAction) => {
  switch (action.type) {
    case ActionTypes.fetchTodos:
      return action.payload;
    case ActionTypes.deleteTodo:
      return action.payload;
    default:
      return state;
  }
};
