import styled from "styled-components"




const Container = styled.div
`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`;


const Image = styled.img
`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: flex;
`;

const Info = styled.div 
`
position: absolute;
top: 0px;
buttom: 0px;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Title = styled.h1
`
 color: white;
 margin-bottom: 20px;
`;

const Button = styled.button
`
  border: none;
  padding: 10px;
  background-color: white;
  color: grey;
  cursor: pointer;
  font-weight:600;
`;


export const CategoryItems = ({ item }) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Info>
         <Title>{item.title}</Title>
         <Button>Shop now</Button>
      </Info>
    </Container>
  )
}
