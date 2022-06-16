
import { Show, SimpleShowLayout, TextField, RichTextField } from 'react-admin';

export const ShowPost = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <RichTextField source="body" />
            <TextField source='title' />
        </SimpleShowLayout>
    </Show>
);