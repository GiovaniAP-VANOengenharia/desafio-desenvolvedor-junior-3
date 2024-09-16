import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 412px;
  height: 914px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.background};
  & > :nth-child(0) {
    width: 100%,
  };
`;