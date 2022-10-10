import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";

export default function NavBar() {
  const Containter = styled.div`
    height: 10px;
  `;

  const Wrapper = styled.div`
    padding: 10px 20px 10px 20px;
    display: flex;
    justify-content: space-between;
  `;

  const Input = styled.input`
    border: none;
  `;

  const SearchContainer = styled.div`
    margin-left: 20px;
    display: flex;
    border: 0.5px solid lightgray;
    align-item: center;
    padding: 5px;
  `;

  const Language = styled.span`
    font-size: 20 px;
    cursor: pointer;
    padding: 10px;
  `;

  const Left = styled.div`
    align-items: center;
    display: flex;
  `;
  const Logo = styled.h1`
    font-weight: bold;
    font-size: 30px;
    padding-right: 100px;
  `;
  const Center = styled.div`
    margin-left: 300px;
    flex: 1;
    display: flex;
    justify-content: center;
  `;
  const Right = styled.div`
    margin-left: 20px;
    display: flex;
    flex: 1;
    justify-content: flex-end;
  `;
  const ManuItem = styled.div`
    margin-left: 10px;
    font-weight: bold;
  `;
  return (
    <Containter>
      <Wrapper>
        <Left>
          <Language>LAN</Language>
          <SearchContainer>
            <Search style={{ color: "grey", fontSize: 14 }} />
            <Input placeholder="search" />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Shopping</Logo>
        </Center>

        <Right>
          <ManuItem>Register</ManuItem>
          <ManuItem>Sign In</ManuItem>
          <ManuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </ManuItem>
        </Right>
      </Wrapper>
    </Containter>
  );
}
