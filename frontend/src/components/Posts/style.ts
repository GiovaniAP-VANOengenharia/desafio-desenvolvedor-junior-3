import styled from 'styled-components';


export const PostCardContainer = styled.div`
  width: 100%;
  margin: 5px 0;

  .post-title-content {
    display: flex;
    align-self: flex-start;
    flex-direction: column;
    margin: 5px 0;

    .post-title {
      font-size: 20px;
      display: flex;
      align-self: flex-start;
    };

    .post-constent {
      font-size: 15px;
      align-self: flex-end;
    }
  };

  .post-footer {
    width: 100%;
    display: flex:
    margin: 5px 0;
    flex-wrap: nowrap;

    .post-date {
      display: flex;
      font-size: 15px;
      width: 40%;
    }
    
    .post-buttons {
      display: flex;
      width: 50%;
      
      .css-view-175oi2r {
        display: flex;
        justify-content: space-between;
        width: 50%;
        border-radius: 3px;
      };
      
      .css-text-1rynq56 {
        font-size: 20px;
        width: 90%;
        display: flex;
        justify-content: center;
        background: ${({ theme }) => theme.secondary};
      };
    };  
  };
`;