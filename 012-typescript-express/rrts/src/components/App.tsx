import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo} from '../actions';
import { StoreState } from '../reducers/index';

interface AppProps {
    todos: Todo[];
    fetchTodos: typeof fetchTodos;
    deleteTodo: typeof deleteTodo;

}

export const _App = (props: AppProps):JSX.Element => {
    const fetchAllTodos = ():void => {
        props.fetchTodos();
    };

    const renderList = (): JSX.Element[]  =>  props.todos.map((todo: Todo) => <div key={todo.id} onClick={onTodoClick(todo.id)}>{todo.title}</div>)
    const onTodoClick = (id:number) => ():void => {
        props.deleteTodo(id);
    }
    return (<div>
        <button onClick={fetchAllTodos}>Fetch</button>
        {renderList()}

    </div>)
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
    return { todos };

}
export const App = connect(mapStateToProps, { fetchTodos, deleteTodo })(_App);