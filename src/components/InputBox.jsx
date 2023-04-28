import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todolist";
import uuid from "react-uuid";

const InputBox = () => {
    const id = uuid();

    const [input, setInput] = useState({title: "", content: ""})
    const dispatch = useDispatch();

    const titleChangeHandler = (e) => {
        const title = e.target.value;
        setInput({...input, title});
    }

    const contentChangeHandler = (e) => {
        const content = e.target.value;
        setInput({...input, content});
    }

    const addTodoHandler = (e) => {
        e.preventDefault()
        const newTodo = {
            id,
            title: input.title,
            content: input.content,
            isDone: false
        };
        dispatch(addTodo(newTodo));
        setInput({title: '', content: ''});
    }

    return (
        <StInputContainer>
            <StInputWrap>
                <StInputLabel>제목</StInputLabel>
                <StInput type="text" onChange={titleChangeHandler} value={input.title} />
                <StInputLabel>내용</StInputLabel>
                <StInput type="text" onChange={contentChangeHandler} value={input.content} />
            </StInputWrap>
            <StAddButton onClick={addTodoHandler}>추가하기</StAddButton>
        </StInputContainer>
    );
};

export default InputBox;

const StInputWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`;

const StInputLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`;

const StInputContainer = styled.form`
    background-color: #eee;
    border-radius: 12px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    gap: 20px;
`;

const StInput = styled.input`
    height: 40px;
    width: 240px;
    border: none;
    border-radius: 12px;
    padding: 0 12px;
`;

const StAddButton = styled.button`
    border: none;
    height: 40px;
    cursor: pointer;
    border-radius: 10px;
    background-color: teal;
    width: 140px;
    color: #fff;
    font-weight: 700;
`;
