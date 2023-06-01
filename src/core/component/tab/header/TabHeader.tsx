import {TabItem} from "../Tab";
import "./_tab-header.scss";

import classNames from "classnames";

type TabHeaderProps = {
  tab: TabItem;
  onClick: (index: number) => void;
  isActive: boolean;
  index: number;
};

function TabHeader({tab, onClick, index, isActive}: TabHeaderProps) {
  return (
    <div
      className={classNames("tab-header", {
        "tab-header--is-active": isActive,
        "tab-header--is-disabled": tab.isDisabled
      })}
      onClick={handleClick}>
      {tab.content}
    </div>
  );

  function handleClick() {
    if (tab.isDisabled) {
      return;
    }
    onClick(index);
  }
}

export default TabHeader;
