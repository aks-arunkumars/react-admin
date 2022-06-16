import { Admin, Layout, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { PostList } from "./components/PostList";
import { UserList } from "./components/Users";
// import { PostCreate } from "./components/CreatePosts";
import { EditPosts } from "./components/EditPosts";
import { ShowPost } from "./components/ShowPost";
import { ShowUser } from "./components/ShowUser";
import { PageLayout } from "./components/Layout/PageLayout";


const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
// console.log(dataProvider);
const App = () => (
  <Admin layout={PageLayout} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={ShowUser} />
    <Resource
      name="posts"
      list={PostList}
      edit={EditPosts}
      // create={PostCreate}
      show={ShowPost}
    />
  </Admin>
);

export default App;

//Create Post code
// import { Create, TextInput, required, SimpleForm  } from "react-admin";
// export const PostCreate = () => (
//   <Create resource="posts">
//     <SimpleForm>
//       {/* <ReferenceField source="userId" reference="users">
//       <TextField source="id" />
//     </ReferenceField> */}

//       <TextInput source="title" validate={[required()]} fullWidth />
//       <TextInput source="body" label="Body" />
//     </SimpleForm>
//   </Create>
// );
