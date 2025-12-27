// import { useState } from "react";

import "./App.css";
import Toast from "../src/components/Toast/Toast";
import Input from "../src/components/Input/Input";
import SidebarMenu from "./components/SidebarMenu/SidebarMenu";

import { BsEmojiSmile } from "react-icons/bs";

function App() {
  return (
    <>
      <header>
        <img src="./angry-cat.png" alt="cat" width="120" />
        <h3>
          There is you may see components kit that you may easy apply in your
          app. Following isolate principles every component you also could watch
          in StoryBook: simple type in console "npm run storybook". Best
          regards! <BsEmojiSmile />
        </h3>
      </header>

      <section>
        <h4>Side menues</h4>
        <div className="section-item-list sidebar-box">
          <div className="section-item sidebar-item left">
            <ul>
              <li>expandedId="none"</li>
              <li>isShowMenu="false"</li>
              <li>placing="left"</li>
            </ul>
            <SidebarMenu
              placing="left"
              list={[
                {
                  id: "aaa",
                  name: "Lorem ipsum",
                  itemChildren: [
                    "dolor sit",
                    "amet consectetur",
                    "adipisicing",
                    "elit",
                  ],
                },
                {
                  id: "aab",
                  name: "Commodi",
                  itemChildren: ["cupiditate", "alias", "vitae", "pariatur"],
                },
                {
                  id: "aac",
                  name: "Voluptatibus",
                  itemChildren: ["officiis", "alias", "veniam", "pariatur"],
                },
              ]}
              expandedId="none"
              isShowMenu={false}
            />
          </div>

          <div className="section-item sidebar-item right">
            <ul>
              <li>expandedId="aab"</li>
              <li>isShowMenu="false"</li>
              <li>placing="right"</li>
            </ul>
            <SidebarMenu
              placing="right"
              list={[
                {
                  id: "aaa",
                  name: "Lorem ipsum",
                  itemChildren: [
                    "dolor sit",
                    "amet consectetur",
                    "adipisicing",
                    "elit",
                  ],
                },
                {
                  id: "aab",
                  name: "Commodi",
                  itemChildren: ["cupiditate", "alias", "vitae", "pariatur"],
                },
                {
                  id: "aac",
                  name: "Voluptatibus",
                  itemChildren: ["officiis", "alias", "veniam", "pariatur"],
                },
              ]}
              expandedId="aab"
              isShowMenu={false}
            />
          </div>
        </div>
      </section>
      <section>
        <h4>Inputs</h4>
        <h5>basic:</h5>
        <div className="section-item-list">
          <div className="section-item">
            <ul>
              <li>type="text" </li>
              <li> clearable="false"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="false"</li>
            </ul>
            <Input
              type="text"
              clearable={false}
              passwordVisibility={false}
              shadow={false}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="text" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="false"</li>
            </ul>
            <Input
              type="text"
              clearable={true}
              passwordVisibility={false}
              shadow={false}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="false"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="false"</li>
            </ul>
            <Input
              type="password"
              clearable={false}
              passwordVisibility={false}
              shadow={false}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="false"</li>
            </ul>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={false}
              shadow={false}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="true"</li>
              <li>shadow="false"</li>
            </ul>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={true}
              shadow={false}
            />
          </div>
        </div>

        <h5>shadowing:</h5>
        <div className="section-item-list">
          <div className="section-item">
            <ul>
              <li>type="text" </li>
              <li> clearable="false"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="true"</li>
            </ul>
            <Input
              type="text"
              clearable={false}
              passwordVisibility={false}
              shadow={true}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="text" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="true"</li>
            </ul>
            <Input
              type="text"
              clearable={true}
              passwordVisibility={false}
              shadow={true}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="false"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="true"</li>
            </ul>
            <Input
              type="password"
              clearable={false}
              passwordVisibility={false}
              shadow={true}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="false"</li>
              <li>shadow="true"</li>
            </ul>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={false}
              shadow={true}
            />
          </div>

          <div className="section-item">
            <ul>
              <li>type="password" </li>
              <li> clearable="true"</li>
              <li>passwordVisibility="true"</li>
              <li>shadow="true"</li>
            </ul>
            <Input
              type="password"
              clearable={true}
              passwordVisibility={true}
              shadow={true}
            />
          </div>
        </div>
      </section>
      <Toast
        type="error"
        text="dhsjdhj dgdygy"
        duration={2000}
        closing={true}
      />
    </>
  );
}

export default App;
