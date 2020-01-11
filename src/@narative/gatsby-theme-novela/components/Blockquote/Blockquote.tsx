import styled from "@emotion/styled";
import mediaqueries from "@styles/media";

const Blockquote = styled.blockquote`  line-height: 1.756;
font-size: 18px;
color: ${p => p.theme.colors.articleText};
font-family: ${p => p.theme.fonts.sansSerif};
transition: ${p => p.theme.colorModeTransition};
margin: 0 auto 35px;
width: 100%;
max-width: 680px;
font-style: italic;
border-left: 2px solid;
padding-left: 12px;
b {
  font-weight: 800;
}
p {
  margin: 10px auto 10px;
}
${mediaqueries.desktop`
  max-width: 507px;
`}
${mediaqueries.tablet`
  max-width: 486px;
  margin: 0 auto 25px;
`};
${mediaqueries.phablet`
  padding: 0 20px;
`};
`;

export default Blockquote;