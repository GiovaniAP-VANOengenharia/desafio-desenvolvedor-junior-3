import styled from 'styled-components';


export const PostCardContainer = styled.div`
  width: 100%;
  margin: 5px 0;

  .post-title-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 5px 0;
    
    .post-inputs {
      width: 80%;
      display: flex;
      flex-direction: column;
      .post-title-input, .post-content-input {
        width: 100%;
      };
      .post-content-input {
        height: 50px;
      };
    };


    .post-title {
      font-size: 20px;
      width: 100%;
    };

    .post-constent {
      font-size: 15px;
      align-self: flex-end;
    }
  };

  .post-footer {
    width: 100%;
    display: flex:
    justify-content: center;
    margin: 5px 0;
    flex-wrap: nowrap;

    .post-date {
      display: flex;
      font-size: 15px;
      width: 40%;
    }
    
    .post-buttons {
      display: flex;
      width: 45%;
      
      .css-view-175oi2r {
        display: flex;
        align-items: center;
        width: 100%;
        border-radius: 3px;
      };
      
      .css-text-1rynq56 {
        font-size: 20px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.secondary};
      };
    };  
  };
`;