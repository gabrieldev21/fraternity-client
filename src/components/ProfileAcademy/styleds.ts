import styled from 'styled-components';

export const Title = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 25px;
  margin: 0;
`;

// eslint-disable-next-line prettier/prettier
export const Item = styled.div<{mt?: boolean}>`
  display: flex;
  margin-top: 40px;
  margin-top: ${({mt})=> mt? '40px': '16px'};
`;

export const Image = styled.img`
  background: #ffffff;
  width: 75.83px;
  height: 56px;
  object-fit: contain;
  border-radius: 27px;
`;

export const ContentText = styled.div`
  flex: 1;
  margin-left: 16px;
`;

export const ItemTitle = styled.h4`
  margin: 0;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
`;

// eslint-disable-next-line prettier/prettier
export const Text = styled.span<{fontWeight?: number;ml?: boolean; isBlue?: boolean}>`
  font-size: 10px;
  line-height: 150%;
  font-weight: ${(props) => props.fontWeight ?? 400};
  ${({ml}) => ml && 'margin-left: 32px;'}
  color: ${({isBlue, theme}) => isBlue?  theme.colors.main: '#181818'};
  text-transform: capitalize;
`;
