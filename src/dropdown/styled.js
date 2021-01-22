import React from "react";
import { FaAngleDown } from "react-icons/fa";
import styled from "styled-components";

export const DropdownContainer = styled.div`
  width: 200px;
  height: 62px;
  margin-bottom: 20px;
  outline: none;
  position: relative;
  display: flex;
  align-items: center;
  z-index: 10;
  --padding: 20px 30px;
`;
export const DropdownButton = styled.div`
  display: flex;
  width: 100%;
  opacity: ${({ visible = true }) => (visible ? 1 : 0)};
  background-color: white;
  box-sizing: border-box;
  padding: var(--padding);
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  align-items: center;
  justify-content: space-between;
  p {
    margin: 0;
  }
`;
export const SizeSelector = styled.div`
  margin-bottom: 20px;
  width: 100%;
  display: block;
  top: 0;
  position: absolute;
  overflow: hidden;
  background-color: white;
  box-sizing: border-box;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  cursor: pointer;
  svg {
    position: absolute;
    right: 55%;
    font-size: 20px;
    color: red;
  }
`;
export const Option = styled.div`
  padding: var(--padding);
  border-bottom: 1px solid #ccc;
  cursor: pointer;
  :hover {
    background-color: lightgray;
  }
`;

export const MainButton = props => {
  const { label, ...rest } = props;
  return (
    <DropdownButton {...rest}>
      <p>{label}</p>
      <FaAngleDown />
    </DropdownButton>
  );
};
