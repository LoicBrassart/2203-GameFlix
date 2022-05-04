import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import SFormAuth from "./style";

export default function FormAuth() {
  const [formData, setFormData] = useState({
    hasAccount: true,
    email: "",
    password: "",
    passwordBis: "",
  });
  const dispatch = useDispatch();

  const hChange = (evt) => {
    const key = evt.target.name;
    let { value } = evt.target;
    if (evt.target.type === "checkbox") {
      value = evt.target.checked;
    }
    setFormData({ ...formData, [key]: value });
  };

  const hSubmit = (evt) => {
    evt.preventDefault();
    let url = `${import.meta.env.VITE_BACKEND_URL}/auth/signup`;
    if (formData.hasAccount) {
      url = `${import.meta.env.VITE_BACKEND_URL}/auth/login`;
    }
    axios
      .post(url, formData)
      .then(({ data }) => {
        const { /* token, */ user } = data;
        // cookies.set("token", token);
        // api.defaults.headers.authorization = "Bearer " + token;
        dispatch({ type: "LOGIN", load: user });
        toast(`You're now logged in, ${user.pseudo} <3`);
      })
      .catch(() => {
        toast.error("Oopsie");
      });
  };

  return (
    <SFormAuth onSubmit={hSubmit}>
      <label htmlFor="hasAccount">
        <input
          name="hasAccount"
          id="hasAccount"
          type="checkbox"
          onChange={hChange}
          checked={formData.hasAccount}
        />
        Have an account already ?
      </label>
      <label htmlFor="email">
        <span>E-mail</span>
        <input
          name="email"
          id="email"
          type="email"
          onChange={hChange}
          value={formData.email}
        />
      </label>
      <label htmlFor="password">
        <span>Password</span>
        <input
          name="password"
          id="password"
          type="password"
          onChange={hChange}
          value={formData.password}
        />
      </label>
      {!formData.hasAccount && (
        <>
          <label htmlFor="passwordBis">
            <span>Password (again)</span>
            <input
              name="passwordBis"
              id="passwordBis"
              type="password"
              onChange={hChange}
              value={formData.passwordBis}
            />
          </label>
          <label htmlFor="pseudo">
            <span>Name</span>
            <input
              name="pseudo"
              id="pseudo"
              type="text"
              onChange={hChange}
              value={formData.pseudo}
            />
          </label>
        </>
      )}
      <input type="submit" value="Send" />
    </SFormAuth>
  );
}
