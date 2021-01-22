import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import SizeSelector from "../dropdown";
import Spinner from "../spinner";
import PizzaPreview from "../image/pizza.jpg";
import {
  Container,
  ContainerPizza,
  Image,
  ContainerContent,
  ProductTitle,
  Price,
  OldPrice,
  NewPrice,
  Controls,
  Basket,
  Header,
  ShoppingCart,
  Number,
  Content,
  Pages,
  Page
} from "./styled";

const Card = props => {
  const items = [
    {
      title: "Margarita",
      oldPrice: "$15.99",
      newPrice: "$10.99",
      structure:
        "Water, Sorghum Flour, Modified Rice Starch, Tapioca Starch, Teff Flour, Cage Free Egg Whites, Whey Powder, Shortening Flakes (Palm Oil, Natural Butter Flavor, Soy Lecithin)"
    }
  ];
  return (
    <Container>
      <ContainerPizza>
        <Image PizzaPreview={PizzaPreview} />
      </ContainerPizza>
      {items.map(item => {
        return <Item {...item} key={item.title} />;
      })}
    </Container>
  );
};

const Item = props => {
  const { title, oldPrice, newPrice, structure } = props;
  return (
    <ContainerContent>
      <Header>
        <ProductTitle>{title}</ProductTitle>
        <ShoppingCart>
          <FaShoppingCart />
          <Number>1</Number>
        </ShoppingCart>
      </Header>
      <Price>
        <span>Sale price:</span>
        <OldPrice>{oldPrice}</OldPrice>
        <NewPrice>{newPrice}</NewPrice>
      </Price>
      <Controls>
        <Spinner />
        <Basket>Add to Basket</Basket>
      </Controls>
      <SizeSelector
        options={[
          {
            label: "Small",
            value: 1
          },
          {
            label: "Medium",
            value: 2
          },
          {
            label: "Large",
            value: 3
          }
        ]}
      />
      <Content>{structure}</Content>
      <Pages>
        <Page active />
        <Page />
        <Page />
        <Page />
      </Pages>
    </ContainerContent>
  );
};

export default Card;
