import styled from 'styled-components';

export const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export const ListItem = styled.li`
  list-style: none;
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;
