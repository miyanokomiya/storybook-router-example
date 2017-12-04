/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from "@storybook/vue";
import StoryRouter from "storybook-router";

import MyButton from "./Button.vue";

storiesOf("Without story-router", module)
  .addDecorator(storyFn => {
    const options = storyFn();
    options.template = `
      <div style="background-color: blue;">
        ${options.template}
      </div>
    `;
    return options;
  })
  // .addDecorator(StoryRouter())
  .addDecorator(storyFn => {
    const options = storyFn();
    options.template = `
      <div style="border: 3px solid red;">
        ${options.template}
      </div>
    `;
    return options;
  })
  .add("MyButton", () => ({
    components: { MyButton },
    template: `
    <div>
      <MyButton />
    </div>
  `
  }));

storiesOf("With story-router", module)
  .addDecorator(storyFn => {
    const options = storyFn();
    options.template = `
      <div style="background-color: blue;">
        ${options.template}
      </div>
    `;
    return options;
  })
  .addDecorator(StoryRouter())
  .addDecorator(storyFn => {
    const options = storyFn();
    options.template = `
      <div style="border: 3px solid red;">
        ${options.template}
      </div>
    `;
    return options;
  })
  .add("MyButton", () => ({
    components: { MyButton },
    template: `
    <div>
      <MyButton />
    </div>
  `
  }));

/* eslint-enable react/react-in-jsx-scope */
