import React from "react";
import { Edit, SimpleForm, TextInput } from "react-admin";

import { validateEmail } from "../validates";

const UserTitle = ({ record }) => {
  return <span>User {record ? record.username : ""}</span>;
};

const UserEdit = (props) => (
  <Edit {...props} title={<UserTitle />}>
    <SimpleForm>
      <TextInput disabled source="id" />
      <TextInput source="username" />
      <TextInput source="fullName" />
      <TextInput source="email" validate={validateEmail} />
      <TextInput source="role" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
