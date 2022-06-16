import React from 'react';
import { Datagrid, EmailField, List, TextField, TextInput } from "react-admin";
const userFilters = [<TextInput label="Search" source="q" alwaysOn />];

export const UserList = () => (
  <List filters={userFilters}>
    <Datagrid rowClick="show">
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
 
    </Datagrid>
  </List>
);
