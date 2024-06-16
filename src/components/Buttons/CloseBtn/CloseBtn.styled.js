import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  top: 40px;
  right: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 32px;
  height: 32px;
  background-color: transparent;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }

  &:focus {
    outline: none;
  }
`;
