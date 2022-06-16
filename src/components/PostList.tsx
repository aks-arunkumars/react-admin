import React from 'react';
import {
  Datagrid,
  List,
  ReferenceField,
  TextField,
  TextInput,

} from "react-admin";

const postFilters = [
  <TextField source="id" />,
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="ID" source="id" />,
];

export const PostList = () => (
  <List filters={postFilters}>
    <Datagrid rowClick="edit">
      <ReferenceField source="userId" reference="users">
        <TextField source="id" />
      </ReferenceField>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="body" />
    </Datagrid>
  </List>
);
