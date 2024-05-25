import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Input, Search, SearchFa, Location } from "./styles";

const Main = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    if (inputValue) {
      navigate(`/weather/${inputValue}`)
    }
  };

  return (
    <Container>
      <Location />
      <Search>
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Digite a cidade"
          />
        <SearchFa
          onClick={handleSearchClick}
          />
      </Search>
    </Container>
  );
};

export default Main;