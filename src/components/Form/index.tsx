import React, { useState } from "react";
import FormView from "./form-view";

export interface FormState {
  input: {
    name: string;
    age: number;
    url: string;
    note?: string;
  };
  showForm: boolean;}
  export interface FormProps {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
  setPeople: React.Dispatch<React.SetStateAction<FormProps["people"]>>;
}

const Form: React.FC<FormProps> = ({ people, setPeople }): JSX.Element => {
  const [input, setInput] = useState<FormState["input"]>({
    name: "TinTin", // default name
    age: 23, // default age
    url: "https://images.squarespace-cdn.com/content/v1/5eb48d3fef49df153d320521/1630397498803-NJIR7Q85HPKC4XXPOG8H/2.jpg", // default url
    note: "An CARTOON Charecter @ Disney", // default note
  });
  const [showForm, setShowForm] = useState<FormState["showForm"]>(false);
  function handleInput(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleClick(): void {
    if (!input.name || !input.age || !input.url) return alert("Must Fill All Input fields");
    else {
      setPeople && setPeople([...people, input]);
      setShowForm(false);
    }
  }
  return <FormView showForm={showForm} setShowForm={setShowForm} handleClick={handleClick} input={input} handleInput={handleInput} />;
};

export default Form;
