import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  margin-bottom: 16px;
`;

export const Pagination = styled.span`
  color: #747474;
  font-size: 18px;
  line-height: 25px;
  font-weight: 400;
  margin-left: 40px;
`;

export const Image = styled.img`
  height: 160px;
  cursor: pointer;
`;

export const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ItemContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-right: 24px;
`;

export const ItemTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 8px;
  margin-top: 16px;
`;
export const ItemDescription = styled.span`
  font-weight: 300;
  font-size: 10px;
  line-height: 150%;
`;
