import { Show, SimpleShowLayout, TextField, EmailField } from 'react-admin';

export const ShowUser = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="address.street" />
      <TextField source="phone" />
      <TextField source="company.name" />
    </SimpleShowLayout>
  </Show>
);