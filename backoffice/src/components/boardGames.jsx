import {
  List,
  Datagrid,
  TextField,
  DateField,
  NumberField,
  UrlField,
  Edit,
  SimpleForm,
  TextInput,
  DateInput,
  NumberInput,
  Create,
} from "react-admin";
import { RichTextInput } from "ra-input-rich-text";

export function BoardgameList() {
  return (
    <List>
      <Datagrid rowClick="edit">
        <TextField source="id" />
        <UrlField source="website" />
        <TextField source="name" />
        <DateField source="publishedAt" />
        <NumberField source="minPlayers" />
        <NumberField source="maxPlayers" />
        <NumberField source="minPlaytime" />
        <NumberField source="maxPlaytime" />
        <NumberField source="minAge" />
        <TextField source="thumbUrl" />
        <TextField source="imageUrl" />
      </Datagrid>
    </List>
  );
}

export function BoardgameEdit() {
  return (
    <Edit>
      <SimpleForm>
        <NumberInput disabled source="id" />
        <TextInput source="name" id="bordelname" />
        <DateInput source="publishedAt" />
        <NumberInput source="minPlayers" />
        <NumberInput source="maxPlayers" />
        <NumberInput source="minPlaytime" />
        <NumberInput source="maxPlaytime" />
        <NumberInput source="minAge" />
        <RichTextInput source="description" />
        <TextInput source="thumbUrl" />
        <TextInput source="imageUrl" />
        <TextInput source="website" />
        <NumberInput source="nbRatings" />
        <NumberInput source="rating" />
      </SimpleForm>
    </Edit>
  );
}

export function BoardgameCreate() {
  return (
    <Create>
      <SimpleForm>
        <TextInput source="name" />
        <DateInput source="publishedAt" />
        <NumberInput source="minPlayers" />
        <NumberInput source="maxPlayers" />
        <NumberInput source="minPlaytime" />
        <NumberInput source="maxPlaytime" />
        <NumberInput source="minAge" />
        <DateInput source="nbRatings" />
        <DateInput source="rating" />
      </SimpleForm>
    </Create>
  );
}
