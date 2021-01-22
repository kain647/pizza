import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  box-sizing: border-box;
  flex-direction: row;
`;
export const ContainerPizza = styled.div`
  display: flex;
  width: 350px;
  height: 450px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  border-radius: 20px 0px 0px 20px;
  box-shadow: 8px 0 10px rgba(0, 0, 0, 0.075);
  z-index: 1;
`;
export const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
  width: 250px;
  background-size: cover;
  background-image: ${({ PizzaPreview }) => `url(${PizzaPreview})`};
`;
export const ContainerContent = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 400px;
  height: 450px;
  background-color: #ddd;
  padding: 20px;
  border-radius: 0px 20px 20px 0px;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
export const ProductTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 28px;
  margin-bottom: 20px;
`;
export const ShoppingCart = styled.div`
  display: flex;
  position: relative;
  background-color: #aaa;
  border-radius: 50px;
  height: 60px;
  width: 60px;
  justify-content: center;
  align-items: center;
  svg {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }
`;
export const Number = styled.div`
  display: flex;
  box-sizing: border-box;
  position: absolute;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  width: 25px;
  height: 25px;
  top: -5px;
  right: -5px;
  color: #fff;
  background-color: red;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin-bottom: 20px;
  span {
    margin-right: 10px;
    font-size: 18px;
  }
`;
export const OldPrice = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  font-weight: 700;
  color: #9e9e9e;
  opacity: 0.8;
  :after {
    display: flex;
    content: "";
    width: 100%;
    position: absolute;
    align-items: center;
    height: 2px;
    background-color: red;
  }
`;
export const NewPrice = styled.div`
  display: flex;
  font-size: 24px;
  font-weight: 700;
`;
export const Controls = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
export const Basket = styled.button`
  display: flex;
  align-items: center;
  background: linear-gradient(180deg, #14b251, #0d6f33);
  color: white;
  padding: 16px 50px;
  border-radius: 40px;
  font-size: 16px;
  font-weight: 700;
  border: none;
  outline: none;
  cursor: pointer;
  user-select: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
  &:active {
    background: linear-gradient(180deg, #0d6f33, #14b251);
  }
`;
export const Content = styled.div`
  width: 80%;
  flex: 0 0 auto;
  background-color: white;
  margin-right: 20px;
  margin-bottom: 10px;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
`;
export const Pages = styled.div`
  display: flex;
  justify-content: center;
`;
export const Page = styled.div`
  size: 12px;
  width: 12px;
  height: 12px;
  background-color: ${({ active }) => (active ? "#14b251" : "#ccc")};
  border-radius: 12px;
  margin-right: 6px;
  cursor: pointer;
`;
