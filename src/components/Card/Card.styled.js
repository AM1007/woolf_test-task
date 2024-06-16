import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 888px;
  /* height: 358px; */
  padding: 24px;
  border-radius: 20px;
  border: 1px solid rgba(16, 24, 40, 0.2);
`;

export const Img = styled.img`
  border-radius: 10px;
  object-fit: cover;
  object-position: -200px center;
  width: 290px;
  height: 310px;
  background: #f2f4f7;
`;

export const CardInfoWrap = styled.div`
  /* border: 1px solid black; */
  width: 526px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 8px;
`;

export const CardTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
`;

export const Price = styled.span`
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.25;
  color: #101828;
  display: flex;
  align-items: start;
`;

export const SubtitleWrap = styled.div`
  margin-bottom: 24px;
  /* border: 1px solid red; */
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const Subtitle = styled.span`
  margin-right: ${props => props.$marginRight || '12px'};
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-decoration: ${props => (props.$underline ? 'underline' : 'none')};
  line-height: 1.5;
  color: #101828;
`;

export const Description = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  color: #475467;
  margin-bottom: 24px;
`;

export const CharsWrap = styled.div`
  margin-bottom: 24px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  /* border: 1px solid green; */
  width: 100%;
`;

export const Char = styled.span`
  display: inline-flex;
  gap: 8px;
  padding: 12px 18px;
  align-items: center;
  font-family: 'Inter', sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.25;
  border-radius: 100px;
  background-color: #f2f4f7;
  color: #101828;
  border: none;
`;
