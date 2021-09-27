import styled from "styled-components";

const ContentStyle = styled.div`
height: 100%;
`

const ContentContainer = ({ children }) => {
  return (
    <ContentStyle>
      <>
        {children}
      </>
    </ContentStyle>
  )
}

export default ContentContainer;