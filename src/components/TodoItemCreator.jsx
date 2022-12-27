import React, { useState } from 'react'
import {useSetRecoilState} from 'recoil'
import { todoListState } from '../store/todoListState'

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState('');
    const setTodoList = useSetRecoilState(todoListState);

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: Math.random(),
                text: inputValue,
                isComplete: false,
            },
        ]);
        setInputValue('')
    }

    const onChange = ({target: {value}}) => {
        setInputValue(value);
    }
  return (
    <div>
        <input value={inputValue} onChange={onChange} type="text" />
        <button onClick={addItem} >Add</button>
    </div>
  )
}

export default TodoItemCreator