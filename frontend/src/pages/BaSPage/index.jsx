import { useState } from "react";
import Button from "@ui/Button";
import Input from "@ui/Input";
import d6 from "@assets/d6.svg";

export default function BaSPage() {
  const myD6 = <img src={d6} alt="" />;
  const [formData, setFormData] = useState({
    email: "email",
    number: 1,
    password: "r00t!",
    date: "2022-05-17",
    "datetime-local": "2022-05-17T06:44",
    month: "2022-06",
    search: "needle",
    text: "Hey!",
    time: "06:44",
    url: "https://smfcorp.net",
    week: "2022-W20",
    tel: "0606 060 606",
    hidden: "ninja",
    color: "blue",
    file: "",

    checkbox: true,
    radio: "",
    range: 2,
    image: "tchoupi",

    reset: undefined,
    submit: undefined,
    button: undefined,
  });

  const hChange = (evt) => {
    evt.preventDefault();
    const { value, name, type, checked } = evt.target;
    const newValue = type === "checkbox" ? checked : value;
    // console.log("Update: ", newValue, " on ", name);
    setFormData({ ...formData, [name]: newValue });
  };

  return (
    <>
      <hr />
      <fieldset>
        <legend>Sandbox</legend>
        {/* <Input
          value={formData.checkbox}
          type="checkbox"
          name="checkbox"
          onChange={hChange}
        />

        <Input
          value={formData.radio}
          type="radio"
          name="radio"
          onChange={hChange}
        />
        <Input
          value={formData.range}
          type="range"
          name="range"
          onChange={hChange}
        />
        <Input
          value={formData.image}
          type="image"
          name="image"
          onChange={hChange}
        /> */}
      </fieldset>

      <fieldset>
        <legend>Fcked</legend>
      </fieldset>

      <fieldset>
        <legend>Validated</legend>
        <Input
          value={formData.file}
          type="file"
          name="file"
          onChange={hChange}
        />
        <Input
          value={formData.hidden}
          type="hidden"
          name="hidden"
          onChange={hChange}
        />
        <Input
          value={formData.color}
          type="color"
          name="color"
          label="Change color"
          onChange={hChange}
        />

        <Input value={formData.tel} type="tel" name="tel" onChange={hChange} />
        <Input
          value={formData.search}
          type="search"
          name="search"
          onChange={hChange}
        />
        <Input
          value={formData.email}
          type="email"
          name="email"
          onChange={hChange}
        />
        <Input
          value={formData.number}
          type="number"
          name="number"
          onChange={hChange}
        />
        <Input
          value={formData.date}
          type="date"
          name="date"
          onChange={hChange}
        />
        <Input
          value={formData.password}
          type="password"
          name="password"
          onChange={hChange}
        />
        <Input
          value={formData.text}
          type="text"
          name="text"
          onChange={hChange}
        />
        <Input value={formData.url} type="url" name="url" onChange={hChange} />

        <Input
          value={formData["datetime-local"]}
          type="datetime-local"
          name="datetime-local"
          onChange={hChange}
        />
        <Input
          value={formData.week}
          type="week"
          name="week"
          onChange={hChange}
        />
        <Input
          value={formData.month}
          type="month"
          name="month"
          onChange={hChange}
        />
        <Input
          value={formData.time}
          type="time"
          name="time"
          onChange={hChange}
        />
        <Input
          value={formData.reset}
          type="reset"
          name="reset"
          onChange={hChange}
        />

        <Input
          value={formData.submit}
          type="submit"
          name="submit"
          onChange={hChange}
        />

        <Input
          value={formData.button}
          type="button"
          name="button"
          onChange={hChange}
          label="Click me"
        />
      </fieldset>

      <hr />

      <Button>Base</Button>
      <Button icon={myD6}>Icon</Button>
      <Button cta>CtA</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}
