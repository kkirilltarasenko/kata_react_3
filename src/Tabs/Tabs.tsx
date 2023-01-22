import React, { FC } from 'react';
import './Tabs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { setActiveTab, TabState } from '../redux-config/reducers/tabsReducer';

const Tabs: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootState) => state.tabs.tabs);

  const setTab = (tab: TabState): void => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="tabs">
      {tabs.map((tab: TabState) => (
        <li
          key={tab.id}
          className={tab.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
          onClick={() => {
            setTab(tab);
          }}
        >
          <h1 className="tabs__element__title">{tab.body}</h1>
        </li>
      ))}
    </div>
  );
};

export default Tabs;
