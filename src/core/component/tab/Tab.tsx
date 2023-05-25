import "./_tab.scss";

import React, {useState} from "react";
import classNames from "classnames";
import TabHeader from "./header/TabHeader";

export type TabItem = {
  id: string;
  content: React.ReactNode;
  isDisabled?: boolean;
};

interface UncontrolledTabProps {
  items: TabItem[];
  children: React.ReactNode[];
  testid?: string;
  initialActiveTabIndex?: number;
  customClassName?: string;
}

type ControlledTabProps =
  | {
      activeTabIndex: number;
      onTabChange: (index: number) => void;
      initialActiveTabIndex?: number;
    }
  | {
      activeTabIndex?: number;
      onTabChange?: (index: number) => void;
    };

export type TabProps = ControlledTabProps & UncontrolledTabProps;

function Tab({
  testid,
  items,
  initialActiveTabIndex = 0,
  activeTabIndex: activeTabIndexFromProps,
  children,
  customClassName,
  onTabChange
}: TabProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(initialActiveTabIndex);
  const tabClassName = classNames("tab", customClassName);

  return (
    <div className={tabClassName}>
      <div className={"tab__header"}>
        {items.map((item, index) => {
          return (
            <TabHeader
              key={item.id}
              onClick={handleChangeActiveTab}
              tab={item}
              isActive={
                activeTabIndexFromProps === undefined
                  ? activeTabIndex === index
                  : activeTabIndexFromProps === index
              }
              index={index}
            />
          );
        })}
      </div>

      <div className={"tab__body"} data-testid={`${testid}.body`}>
        {
          children[
            activeTabIndexFromProps === undefined
              ? activeTabIndex
              : activeTabIndexFromProps
          ]
        }
      </div>
    </div>
  );

  function handleChangeActiveTab(index: number) {
    if (onTabChange && index !== activeTabIndexFromProps) {
      onTabChange(index);
    }

    if (activeTabIndexFromProps === undefined) {
      setActiveTabIndex(index);
    }
  }
}

export default Tab;
