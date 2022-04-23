import React from "react";

import ListUserComponent from "./ListUserComponent";

export default {
  title: "CS411/MyButton",
  component: ListUserComponent,
};

const Template = (args) => <ListUserComponent {...args} />;

export const ListUserComponentStory = Template.bind({});
ListUserComponentStory.args = {
  counter: 0,
};
