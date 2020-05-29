import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

const formSchema = yup.object().shape({
  name: yup.string().required("Oops, you forgot your own name!"),
  email: yup
    .string()
    .required("Don't forget your email!")
    .email("Email must be complete!"),
  password: yup.string().required("What's the secret password?"),
  year: yup.date().required("Please Enter a Valid Year"),
});
export default function Form() {
  const [users, setUsers] = useState([]);
  const [post, setPost] = useState([]);
  const [formState, setFormState] = useState({});
  const [errorState, setErrorState] = useState({
    name: "",
    email: "",
    password: "",
    year: "",
  });
  const validate = (event) => {
    yup
      .reach(formSchema, event.target.name)
      .validate(event.target.value)
      .then((valid) => {
        setErrorState({
          ...errorState,
          [event.target.name]: "",
        });
      })
      .catch((err) => {
        console.log(err.errors);
        setErrorState({
          ...errorState,
          [event.target.name]: err.errors[0],
        });
      });
  };
  const inputChange = (event) => {
    event.persist();
    validate(event);
    let value =
      event.target.type === "checkbox"
        ? event.target.checked
        : event.target.value;
    setFormState({ ...formState, [event.target.name]: value });
  };
  const formSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    axios
      .post("https://bw.stvsu.com", formState)
      .then((response) => {
        setPost([]);
        setUsers([...users, response.data]);
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        <input
          type="text"
          placeholder="First and Last Name"
          name="name"
          id="name"
          value={formState.name}
          onChange={inputChange}
        />
        {errorState.name.length > 0 ? (
          <p className="error">{errorState.name}</p>
        ) : null}
      </label>
      <div>
        <label htmlFor="email">
          <input
            type="email"
            placeholder="Enter Email Address Here"
            name="email"
            id="email"
            value={formState.email}
            onChange={inputChange}
          />
          {errorState.email.length > 0 ? (
            <p className="error">{errorState.email}</p>
          ) : null}
        </label>
        <label htmlFor="password">
          <input
            type="password"
            placeholder="Enter Password Here"
            name="password"
            id="password"
            value={formState.password}
            onChange={inputChange}
          />
          {errorState.password.length > 0 ? (
            <p className="error">{errorState.password}</p>
          ) : null}
        </label>
        <label htmlFor="year">
          <input
            type="text"
            placeholder="Enter Year Of Birth"
            name="year"
            id="year"
            value={formState.year}
            onChange={inputChange}
          />
          {errorState.year.length > 0 ? (
            <p className="error">{errorState.year}</p>
          ) : null}
        </label>
        <button>Submit</button>
        {post.length > 0 ? <pre>{JSON.stringify(post, null, 2)}</pre> : null}
      </div>
    </form>
  );
}