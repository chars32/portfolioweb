import styled from "styled-components";

const ContentStyle = styled.div`
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