import styled from "styled-components";

export const SpinnerContainer = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: 30px;
  align-items: stretch;
  font-size: 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  margin-right: 20px;
`;
export const SpinnerButton = styled.div`
  padding: 16px;
  background-color: #fff;
  cursor: pointer;
  font-weight: 700;
  user-select: none;
  &:hover{
    background-color: lightgray;
`;
export const SpinnerValue = styled.div`
  margin: 0 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  width: 40px;
`;
