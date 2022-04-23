import React from "react";

import MyButton from "./button";

export default {
  title: "CS411/MyButton",
  component: MyButton,
};

const Template = (args) => <MyButton {...args} />;

export const MyButtonStory = Template.bind({});
MyButtonStory.args = {};
