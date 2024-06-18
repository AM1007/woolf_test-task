import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(17, 18, 19, 0.4);
  backdrop-filter: blur(5px);
  z-index: 20;
  transition: cubic-bezier(0.39, 0.575, 0.565, 1) all;
  overflow-y: auto;
`;

export const Dialog = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  transition: 1s all;
  border-radius: 20px;
  width: 982px;
  padding: 40px;
  overscroll-behavior: contain;
  background-color: #fff;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Description = styled.p`
  margin-bottom: 44px;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
`;

export const BtnContainer = styled.div`
  border-bottom: 1px solid rgba(16, 24, 40, 0.2);
  margin-bottom: 44px;
`;

export const ContentBtn = styled.button`
  position: relative;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  padding: 0 0 24px;
  margin-right: 40px;
  border: 0;
  background-color: transparent;

  &.active::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 5px;
    background-color: #e44848;
  }
`;
