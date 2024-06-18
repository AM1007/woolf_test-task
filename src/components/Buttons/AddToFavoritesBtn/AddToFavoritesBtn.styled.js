import styled from 'styled-components';

export const FavoritesBtn = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 3px 3px 0px 10px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;
