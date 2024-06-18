import styled from 'styled-components';

export const Container = styled.div`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

export const Details = styled.div`
  /* border: 1px solid red; */
  width: 430px;
`;

export const FeaturesForm = styled.div`
  border: 1px solid rgba(16, 24, 40, 0.2);
  width: 448px;
  padding: 24px;
  border-radius: 10px;
`;

export const FeaturesUl = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0 0 44px;
`;

export const FeaturesWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

export const TitleDetails = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 1.2;
  color: #101828;
  width: 100%;
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(16, 24, 40, 0.1);
  margin-bottom: 24px;
`;

export const DetailsUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
`;

export const DetailLi = styled.li`
  /* border: 1px solid green; */
  width: 429px;
  display: flex;
  justify-content: space-between;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 1.33333;
  text-align: center;
  color: #101828;
`;
