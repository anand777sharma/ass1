import React from 'react';
import { Box, Typography, styled } from "@mui/material";

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
margin:30px 70px auto;
justify-content:center;
`
const RightComponent = styled(Box)`
border:1px solid rgba(0,0,0);
width:433px;
`
const Heading=styled(Typography)`
font-size:110px;
margin-bottom:10px;
margin-left:100px;
margin-right:auto;
color:#c3cfd9;
`;
const Card = styled(Box)`
display:flex;
flex-direction:column;
justify-content:center;

`;
const Name = styled(Typography)`
margin:auto;
font-size:80px;
color:rbg(0, 0, 0, 0.6);

`;
const Price = styled(Typography)`
margin:auto;
font-size:25px;
color:rbg(0, 0, 0, 0.6);

`;
const Item = styled(Typography)`
margin:30px auto;
font-size:60px;
color:rbg(0, 0, 0, 0.6);

`;

const RightChild = ({ selectedId, data }) => {
  const selectedItem = data.find((item) => item.id === selectedId);
  return (
    <Wrapper>
      <Heading>Card</Heading>
    <RightComponent>

      {selectedItem ? (
        <Card>
        
          <Name>{selectedItem.Name}</Name>
          <Price>Price: $ {selectedItem.Price}</Price>
          <Item>Item ID: {selectedItem.id}</Item>
        </Card>
      ) : (
        <p>No item selected</p>
      )}
    </RightComponent>
    </Wrapper>
  )
}

export default RightChild;