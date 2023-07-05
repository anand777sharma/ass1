import React, { useState } from "react";
import LeftChild from "./LeftChild";
import RightChild from "./RightChild";
import { data } from "../data/data";
import { Box,styled } from "@mui/material";

const Component = styled(Box)`
display:flex;
`

const Home = () => {
    const [selectedId, setSelectedId] = useState(3); 

    const handleItemClick = (id) => {
      setSelectedId(id);
    };
  
  return (
    <Component>
      <LeftChild data={data} onItemClick={handleItemClick} />
      <RightChild selectedId={selectedId} data={data} />
    </Component>
  )
}

export default Home;



