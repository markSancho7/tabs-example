import { StyledList, StyledTab, StyledTabsContainer } from './styles';
import { v4 } from 'uuid';
import { useState } from 'react';

const tabs = ['tab1', 'tab2', 'tab3'];
const tabsInfo = ['tabInfo1', 'tabInfo2', 'tabInfo3'];
const Tabs = () => {
	const [changeName, setChangeName] = useState(0);
	return (
		<>
			<StyledTabsContainer>
				<StyledList>
					{tabs.map((tab, index) => {
						return (
							<StyledTab
								$active={index === changeName}
								onClick={() => {
									functionToChangeName(setChangeName, index);
								}}
								key={tab.id}
							>
								{tab}
							</StyledTab>
						);
					})}
				</StyledList>
				<p>{tabsInfo[changeName]}</p>
			</StyledTabsContainer>
		</>
	);
};
const functionToChangeName = (setChangeName, index) => {
	setChangeName(index);
};

export default Tabs;

// const tabs = [
// 	{ id: v4(), tabName: 'tab1', tabSelected: false },
// 	{ id: v4(), tabName: 'tab2', tabSelected: false },
// 	{ id: v4(), tabName: 'tab3', tabSelected: false }
// ];
// const tabsInfo = ['tabInfo1', 'tabInfo2', 'tabInfo3'];
// const Tabs = () => {
// 	const [tabActive, setTabActive] = useState(0);
// 	return (
// 		<>
// 			<StyledTabsContainer>
// 				<StyledList>
// 					{tabs.map((tab, index) => {
// 						return (
// 							<StyledTab
// 								onClick={() => changeTabActive(setTabActive, index)}
// 								key={tab.id}
// 								$active={index === tabActive}
// 							>
// 								{tab.tabName}
// 							</StyledTab>
// 						);
// 					})}
// 				</StyledList>
// 				<h1>{tabsInfo[tabActive]}</h1>
// 			</StyledTabsContainer>
// 		</>
// 	);
// };

// const changeTabActive = (setTabActive, indexTab) => {
// 	setTabActive(indexTab);
// };

// export default Tabs;
