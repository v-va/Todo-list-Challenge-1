import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import styled from "styled-components";

const ContentBox = () => {
    const todos = useSelector((state) => {
        return state.todolist;
    });

    return (
        <StListContainer>
            <h2>Working...🔥</h2>
            <StListWrapper>
                {todos.map((todo) => {
                    const id = uuid();
                    if (todo.isDone === false) {
                        return (
                            <StCard key={id}>
                                <StLink>
                                    <div>상세보기</div>
                                </StLink>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div className="cardContent">{todo.content}</div>
                                </div>
                                <StCardBtnWrap>
                                    <StButton bdc="red">삭제하기</StButton>
                                    <StButton bdc="green">완료!</StButton>
                                </StCardBtnWrap>
                            </StCard>
                        );
                    }
                })}
            </StListWrapper>
            <h2>Done..! 🌟</h2>
            <StListWrapper>
                {todos.map((todo) => {
                    const id = uuid();
                    if (todo.isDone === true) {
                        return (
                            <StCard key={id}>
                                <StLink>
                                    <div>상세보기</div>
                                </StLink>
                                <div>
                                    <h2>{todo.title}</h2>
                                    <div className="cardContent">{todo.content}</div>
                                </div>
                                <StCardBtnWrap>
                                    <StButton bdc="red">삭제하기</StButton>
                                    <StButton bdc="green">완료!</StButton>
                                </StCardBtnWrap>
                            </StCard>
                        );
                    }
                })}
            </StListWrapper>
        </StListContainer>
    );
};

export default ContentBox;

const StListContainer = styled.div`
    padding: 0 24px;
`;

const StListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
`;

const StCard = styled.div`
    width: 270px;
    border: 4px solid teal;
    min-height: 150px;
    border-radius: 12px;
    padding: 12px 24px 24px 24px;
`;

const StLink = styled(Link)`
    text-decoration: none;
`;

const StCardBtnWrap = styled.div`
    display: flex;
    justify-content: end;
    padding: 12px;
    gap: 12px;
`;

const StButton = styled.button`
    border: 1px solid ${({ bdc }) => bdc};
    height: 40px;
    width: 120px;
    background-color: #fff;
    border-radius: 12px;
    cursor: pointer;
`;
