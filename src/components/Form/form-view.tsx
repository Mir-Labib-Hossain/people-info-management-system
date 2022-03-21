import React from "react";
import { FormState as FormProps } from "./index";
import { Button, Form, FormBlock, Input, P, Textarea } from "./styled";
interface props {
  showForm: boolean;
  setShowForm: Function;
  handleClick: React.MouseEventHandler<HTMLButtonElement>;
  input: FormProps["input"];
  handleInput: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}
export default function FormView({ showForm, setShowForm, handleClick, input, handleInput }: props): JSX.Element {
  return (
    <Form>
      {!showForm ? (
        <Button onClick={() => setShowForm(true)} color="green">
          +
        </Button>
      ) : (
        <>
          <FormBlock>
            <P>Name* :</P>
            <Input type="text" placeholder="Enter Name" value={input.name} onChange={handleInput} name="name" />
          </FormBlock>

          <FormBlock>
            <P> Age* :</P>
            <Input type="number" placeholder="Enter age" value={input.age} onChange={handleInput} name="age" />
          </FormBlock>

          <FormBlock>
            <P> Img URL* :</P>
            <Input type="text" placeholder="Enter img url" value={input.url} onChange={handleInput} name="url" />
          </FormBlock>

          <FormBlock>
            <P>Short Note :</P>
            <Textarea id="" cols={30} name="note" value={input.note} onChange={handleInput} />
          </FormBlock>
          <Button type="button" onClick={handleClick} color="green">
            Enter
          </Button>
        </>
      )}
    </Form>
  );
}
