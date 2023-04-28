import React from "react";
import styled from "styled-components";

const InputBox = () => {
    return (
        <StInputContainer>
            <StInputWrap>
                <StInputLabel>제목</StInputLabel>
                <StInput type="text" />

                <StInputLabel>내용</StInputLabel>
                <StInput type="text" />
            </StInputWrap>
            <StAddButton>추가하기</StAddButton>
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
