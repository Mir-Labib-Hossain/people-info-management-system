import styled from "styled-components";

export const Form = styled.div`
  margin-bottom: 50px;
`;
export const Button = styled.button`
  margin-bottom: 50px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  border: none;
  background-color: ${(props) => props.color};
  color: white;
  font-weight: bold;
  cursor: pointer;
`;
export const FormBlock = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
`;
export const P = styled.p`
  margin: 10px;
  width: 25%;
  font-family: Arial, Helvetica, sans-serif;
`;
export const Input = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: gray;
`;
export const Textarea = styled.textarea`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
  outline: none;
  border: none;
  color: gray;
`;
