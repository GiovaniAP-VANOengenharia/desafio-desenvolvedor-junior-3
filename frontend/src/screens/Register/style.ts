import styled from 'styled-components';


export const RegisterContainer = styled.div`
  width: 412px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};

  .RegisterInputs {
    font-size: 20px;
  }
  
  .register-buttons {
    width: 80%;
    display: flex;
    justify-content: space-between;
  };
  
  .css-view-175oi2r {
    width: 40%;
    border-radius: 3px;
    margin: 5px 0;
    background: ${({ theme }) => theme.primary};
    
    .css-text-1rynq56 {
      display: flex;
      justify-content: center;
    }
  }
  
  .css-text-1rynq56 {
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`;
