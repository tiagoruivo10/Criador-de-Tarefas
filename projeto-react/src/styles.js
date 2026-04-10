import styled from "styled-components";
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
  background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;

  h1 {
    color: #ffffff;
    margin-bottom: 30px;
    font-size: 36px;

    @media (max-width: 480px) {
      font-size: 24px;
      margin-bottom: 20px;
    }
  }
`;

export const ToDoList = styled.div`
  background: white;
  padding: 30px 20px;
  border-radius: 5px;
  max-height: 80vh;
  width: 100%;
  max-width: 560px;
  overflow-y: auto;
  box-sizing: border-box;

  ul {
    padding: 0;
    margin-top: 60px;

    h3 {
      text-align: center;
    }

    @media (max-width: 480px) {
      margin-top: 20px;
    }
  }
`;

export const Input = styled.input`
  border: 2px solid rgba(209, 211, 212, 0.4);
  border-radius: 5px;
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  margin-bottom: 10px;

  @media (min-width: 481px) {
    width: calc(100% - 150px);
    margin-right: 10px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  background: #8052ec;
  border-radius: 5px;
  font-weight: 900;
  font-size: 17px;
  height: 40px;
  border: none;
  color: #fff;
  width: 100%;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media (min-width: 481px) {
    width: 130px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media (min-width: 481px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ListItem = styled.div`
  background: ${(props) => (props.isFinished ? "#04f45c" : "#E4E4E4")};
  box-shadow: 1px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;

  li {
    list-style: none;
    flex: 1;
    margin: 0 10px;
    word-break: break-word;
    font-size: 14px;

    @media (min-width: 481px) {
      font-size: 16px;
    }
  }
`;

export const Trash = styled(FcEmptyTrash)`
  cursor: pointer;
  min-width: 20px;
`;

export const Check = styled(FcCheckmark)`
  cursor: pointer;
  min-width: 20px;
`;
