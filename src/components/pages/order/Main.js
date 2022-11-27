import styled from "styled-components"

export default function Main() {
  return <MainStyled className="main">Main</MainStyled>
}

const MainStyled = styled.div`
  background: green;
  flex: 1; // or you can also use this : height: calc(95vh - 10vh);
`
