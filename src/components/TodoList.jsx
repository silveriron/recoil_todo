import React from 'react'
import {useRecoilValue} from 'recoil'
import { filteredTodoListState } from '../store/todoListFilterState'

import TodoItem from './TodoItem'
import TodoItemCreator from './TodoItemCreator'
import TodoListFilters from './TodoListFilters'
import TodoListStats from './TodoListStats'

const TodoList = () => {
    const todoList = useRecoilValue(filteredTodoListState)
  return (
    <main className='container'>
      <h1>Todo List</h1>
    <TodoListStats/>
    <TodoListFilters/>
    <TodoItemCreator/>

    {todoList.map((todoItem, index) => <TodoItem key={index} item={todoItem} />)}
    </main>
  )
}

export default TodoList