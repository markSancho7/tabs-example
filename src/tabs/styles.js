import styled from 'styled-components';

const StyledTabsContainer = styled.div`
	width: 300px;
`;

const StyledList = styled.ul`
	display: flex;
	list-style: none;
	margin-top: 0;
	margin-bottom: 0;
	padding-left: 0;
`;

const StyledTab = styled.li`
	width: 100%;
	padding: 1rem;
	border: 1px solid black;
	background-color: ${({ $active }) => ($active ? 'red' : 'green')};
	color: blue;
	cursor: pointer;
`;

export { StyledTabsContainer, StyledList, StyledTab };
