import React, { FC } from 'react';
import './FilterTabs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { setActiveAction, TabState } from '../redux-config/reducers/filterTabsReducer';

const FilterTabs: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootState) => state.tabsReducer.tabs);

  const setActiveTab = (tab: TabState): void => {
    dispatch(setActiveAction(tab));
  };

  return (
    <div className="tabs">
      {tabs.map((tab: TabState) => (
        <li
          key={tab.id}
          className={tab.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
          onClick={() => {
            setActiveTab(tab);
          }}
        >
          <h1 className="tabs__element__title">{tab.body}</h1>
        </li>
      ))}
    </div>
  );
};

export default FilterTabs;
