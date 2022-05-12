import Button from "@ui/Button";
import Input from "@ui/Input";
import d6 from "@assets/d6.svg";

export default function BaSPage() {
  return (
    <>
      <Input type="mail" name="email" onChange={() => {}} />
      <Input
        type="number"
        name="nbClicks"
        onChange={() => {}}
        label="Test avec label customisé"
      />

      <hr />
      <Button>Base</Button>
      <Button icon={d6}>Icon</Button>
      <Button cta>CtA</Button>
      <Button disabled>Disabled</Button>
    </>
  );
}
