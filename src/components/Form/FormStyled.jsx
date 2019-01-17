import styled from "styled-components";
import { theme, sizes } from "../GlobalStyle";

const FormTop = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  padding-bottom:2rem;
  .titleForm {
    font-size: 1.5em;
    /* background-color: ${theme.white}; */
    color: ${theme.black2};
    text-transform: capitalize;
    text-shadow: 0px 1px 0px ${theme.black};
    border-bottom: 0.5px solid ${theme.borderlight};
    padding: 0;
    margin-bottom: 1rem;
  }
  .Hidden{
    display:none;
  }
  @media (min-width: ${sizes.tablet}px) {
    margin: 0 20%;
    .titleForm {
      font-size: 2em;
    }
  .buttonSubmit:active{
    box-shadow:0 1px 2px 0 rgba(60, 64, 67, 0.30),
    0 3px 6px 2px rgba(60, 64, 67, 0.15)
  }
  }
`;
const FormWrap = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 5px 14px;
  /* background-color: ${theme.white}; */
  grid-row-gap: 1rem;
  * {
    outline: none;
  }
  .buttonSubmit {
    box-shadow: none;
  }
  .buttonSubmit:focus {
    box-shadow: 0px 2px 20px 4px #f5dddd;
  }
`;
const FormParent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  /* padding: 0px 10px; */
  line-height: 2;
  label {
    text-align: start;
    font-size: 16px;
    font-weight: 400;
    text-transform: uppercase;
  }
  input {
    font-size: 20px;
    border: 1px solid ${theme.borderlight};
    /* border-radius: 8px; */
    padding: 0.5rem 1rem;
    caret-color: ${theme.gold};
    user-select: text;
  }
  @media (min-width: ${sizes.tablet}px) {
    input {
      padding: 0.8rem 1.6rem;
    }
  }
`;

const Button = styled.input`
  margin: auto;
  text-transform: uppercase;
  border: 1px solid ${theme.gold};
  background-color: ${theme.goldopa};
  font-size: 1.3rem;
  padding: 8px 16px;
  @media (min-width: ${sizes.tablet}px) {
    font-size: 1.7rem;
  }
`;
const FormHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  > div > img {
    width: 40%;
    height: 20%;
    border-radius: 50%;
    object-fit: contain;
    border: 3px solid ${theme.gold};
  }
  > div > p {
    line-height: 0.7;
  }
  @media (min-width: ${sizes.tablet}px) {
    > div > img {
      width: 20%;
      height: 20%;
    }
  }
`;

export { FormTop, FormWrap, FormParent, Button, FormHeader };
