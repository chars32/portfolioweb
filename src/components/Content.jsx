import styled from "styled-components";

const ContentStyle = styled.div`
  height: 90%;
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