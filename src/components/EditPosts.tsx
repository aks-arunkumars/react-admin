import { Edit, SimpleForm, TextInput} from 'react-admin';

export const EditPosts = () => (
  <Edit>
    <SimpleForm>
      <TextInput disabled label="Id" source="id" />
      <TextInput source="title"/>
      <TextInput source="body" />
    </SimpleForm>
  </Edit>
);