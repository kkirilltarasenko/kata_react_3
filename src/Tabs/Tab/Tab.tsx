import React, { FC } from 'react';
import '../Tabs.scss';
import { TabState } from '../../redux-config/reducers/tabsReducer/tabsTypes';

interface TabProps {
  tab: TabState;
  functionTab: (tab: TabState) => void;
}

const Tab: FC<TabProps> = ({ tab, functionTab }): JSX.Element => {
  return (
    <li
      className={tab.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
      onClick={() => {
        functionTab(tab);
      }}
    >
      <h1 className="tabs__element__title">{tab.body}</h1>
    </li>
  );
};

export default Tab;
