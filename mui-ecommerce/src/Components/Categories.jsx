import styled from "styled-components";
import { CategoryItems } from "./CategoryItem.jsx";
import { categories } from "./data.js";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

export const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItems item={item} key={item.id} />
      ))}
    </Container>
  );
};
