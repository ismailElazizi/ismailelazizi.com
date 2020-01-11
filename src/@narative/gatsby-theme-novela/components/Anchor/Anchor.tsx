import styled from "@emotion/styled";

const Anchor = styled.a`
  transition: ${p => p.theme.colorModeTransition};
  color: ${p => p.theme.colors.accent};
  text-decoration: underline;
  &:visited {
    color: ${p => p.theme.colors.accent};
    opacity: 0.85;
  }
  &:hover{
    opacity: 0.85;
  }
  &:focus {
    text-decoration: underline;
  }
`;

export default Anchor;