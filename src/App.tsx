// import { useState } from "react";

import "./App.css";
import Toast from "../src/components/Toast/Toast";
import Input from "../src/components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

import { BsEmojiSmile } from "react-icons/bs";

function App() {
  return (
    <>
      <h3>
        There is you may see components kit that you may easy apply in your app.
        Following isolate principles every component you also could watch in
        StoryBook: simple type in console "npm run storybook". Best regards!
      </h3>
      <h3>
        <BsEmojiSmile />
      </h3>
      <section>
        <h4>Inputs</h4>
        <h5>basic:</h5>
        <div className="section-item-list">
          <fieldset>
            <legend>type="text"</legend>
            <Input
              type="text"
              clearable={false}
              passwordVisibility={false}
              shadow={false}
            />
          </fieldset>
          <fieldset>
            <legend>type="text" clearable</legend>
            <Input
              type="text"
              clearable={true}
              passwordVisibility={false}
              shadow={false}
            />
          </fieldset>

          <fieldset>
            <legend>type="password"</legend>
            <Input
              type="password"
              clearable={false}
              passwordVisibility={false}
              shadow={false}
            />
          </fieldset>
          <fieldset>
            <legend>type="password" clearable</legend>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={false}
              shadow={false}
            />
          </fieldset>
          <fieldset>
            <legend>type="password" clearable passwordVisibility</legend>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={true}
              shadow={false}
            />
          </fieldset>
        </div>

        <h5>shadowing:</h5>
        <div className="section-item-list">
          <fieldset>
            <legend>type="text"</legend>
            <Input
              type="text"
              clearable={false}
              passwordVisibility={false}
              shadow={true}
            />
          </fieldset>
          <fieldset>
            <legend>type="text" clearable</legend>
            <Input
              type="text"
              clearable={true}
              passwordVisibility={false}
              shadow={true}
            />
          </fieldset>

          <fieldset>
            <legend>type="password"</legend>
            <Input
              type="password"
              clearable={false}
              passwordVisibility={false}
              shadow={true}
            />
          </fieldset>
          <fieldset>
            <legend>type="password" clearable</legend>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={false}
              shadow={true}
            />
          </fieldset>
          <fieldset>
            <legend>type="password" clearable passwordVisibility</legend>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={true}
              shadow={true}
            />
          </fieldset>
        </div>
      </section>
      <Toast
        type="error"
        text="dhsjdhj dgdygy"
        duration={2000}
        closing={true}
      />
      <SidebarMenu
        list={[
          { id: "ddd", name: "ff", itemChildren: ["1", "2", "3", "4"] },
          { id: "add", name: "aaaff", itemChildren: ["1", "2", "3", "4"] },
        ]}
        expandedId="none"
        isShowMenu={false}
      />
    </>
  );
}

export default App;
