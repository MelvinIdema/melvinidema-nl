import React from "react";
import Button from "./Button";

import { action } from "@storybook/addon-actions";

export default {
    title: "Button",
    component: Button,
}

const Template = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    label: "Default Button",
    type: "default",
    size: "default",
    onButtonClick: action('onButtonClick'),
}

export const Secondary = Template.bind({});
Secondary.args = {
    ...Default.args,
    type: "secondary",
    label: "Secondary Button",
}

export const Large = Template.bind({});
Large.args = {
    ...Default.args,
    label: "Large Button",
    size: "large",
}

export const LongLabel = Template.bind({});
LongLabel.args = {
    ...Default.args,
    label: "Button with a very long label that's so long it's not viable.",
}