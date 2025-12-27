import s from "./SidebarMenu.module.css";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

interface Item {
  id: string;
  name: string;
  itemChildren: string[];
}

interface SidebarMenu {
  list: Item[];
  expandedId: string;
  isShowMenu: boolean;
  placing: string;
}

export default function SidebarMenu({
  list,
  expandedId = "none",
  isShowMenu = false,
  placing = "right",
}: SidebarMenu) {
  const [stateExpandedId, setStateExpandedId] = useState(expandedId);
  const [isShow, setIsShow] = useState(isShowMenu);

  const handleExpend = (e: React.MouseEvent<HTMLLIElement>) => {
    let id = e.currentTarget.dataset.id;
    if (id === undefined) id = "none";
    if (stateExpandedId === id) {
      setStateExpandedId("none");
      return;
    }
    setStateExpandedId(id);
  };

  function handleClose() {
    setIsShow(!isShow);
  }

  return (
    <div
      className={`${s.box} ${isShow ? s.show : s.hide} ${
        placing === "left" && s.left
      }`}
    >
      <div className={`${s.showBox} ${placing === "left" && s.showBoxLeft}`}>
        <div className={s.closeBtn} onClick={handleClose}>
          {isShow ? <IoMdClose /> : <RxHamburgerMenu />}
        </div>
        <ul>
          <li>{isShow ? "h" : "s"}</li>
          <li>{isShow ? "i" : "h"}</li>
          <li>{isShow ? "d" : "o"}</li>
          <li>{isShow ? "e" : "w"}</li>
        </ul>
      </div>
      <ul className={s.list}>
        {list.map((item) => {
          return (
            <li
              data-id={item.id}
              className={s.item}
              key={item.id}
              onClick={handleExpend}
            >
              <p> {item.name} </p>
              {stateExpandedId === item.id && (
                <ul>
                  {item.itemChildren.map((child, i) => {
                    return <li key={i}>{child}</li>;
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
