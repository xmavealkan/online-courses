import React from "react";
import styled from "styled-components";

const AsideContainer = styled.aside`
  background-color: #f5f5f5;
  padding: 20px;
  height: 100vh;
  width: 20%;
`;

const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 5px;
`;

function Aside(props) {
  const {title, items} = props;

  return (
    <AsideContainer>
      <Title>{title}</Title>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </List>
    </AsideContainer>
  );
}

export default Aside;
