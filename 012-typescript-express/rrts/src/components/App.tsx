import React from 'react';
import { connect } from 'react-redux';
import { Todo, fetchTodos} from '../actions';
import { StoreState } from '../reducers/index';

interface AppProps {
    todos: Todo[];
    fetchTodos(): any;

}

export const _App = (props: AppProps):JSX.Element => {
    const fetchAllTodos = ():void => {
        props.fetchTodos();
    };

    const renderList = (): JSX.Element[]  =>  props.todos.map((todo: Todo) => <div key={todo.id}>{todo.title}</div>)
    return (<div>
        <button onClick={fetchAllTodos}>Fetch</button>
        {renderList()}

    </div>)
}

const mapStateToProps = ({ todos }: StoreState): { todos: Todo[]} => {
    return { todos };

}

export const App = connect(mapStateToProps, { fetchTodos })(_App);