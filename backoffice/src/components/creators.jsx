import {
  List,
  Datagrid,
  TextField,
  UrlField,
  SimpleForm,
  NumberField,
  RichTextField,
  TextInput,
  Edit,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export function CreatorList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <UrlField source="website" />
        <TextField source="name" />
        <TextField source="thumbUrl" />
        <RichTextField source="description" />
      </Datagrid>
    </List>
  );
}

export function CreatorEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberField source="id" />
        <TextInput source="website" />
        <TextInput source="name" />
        <TextInput source="thumbUrl" />
        <RichTextInput source="description" />
      </SimpleForm>
    </Edit>
  );
}

export function CreatorPost() {
  return <>Coming soon</>;
}
