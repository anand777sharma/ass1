import React from 'react';
import { Box,  styled } from "@mui/material";

const LeftComponent = styled(Box)`
min-width:150px;
margin-top:30px; 
width:20%;
`;

const ListItem = styled(Box)`
display :flex;
height:18px;
font-size:20px;
font-weight:600;
padding:13px 13px;
cursor:pointer;
border:1px solid rgba(0,0,0);
`;
const StyledDivider = styled(Box)`
margin:0px;padding:0px;

`;
const Header = styled(Box)`
margin:20px 0 0 38px;

`;



const LeftChild = ({ data, onItemClick }) => {
    return (
        <LeftComponent>
             <Header>
             <ListItem>List Item</ListItem>
             </Header>
            <ul>
                {data.map((item) => (
                    <StyledDivider>
                        <ListItem key={item.id} onClick={() => onItemClick(item.id)}>
                            {item.Name}
                        </ListItem>
                    
                    </StyledDivider>
                ))}
            </ul>
        </LeftComponent>
    )
}

export default LeftChild;