import styled from 'styled-components';


export const PostContainer = styled.div`
  width: 412px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.background};

  .posts-header {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;

    .css-text-1rynq56 {
      font-size: 20px;
      display: flex;
      justify-content: center
    };

    .css-view-175oi2r {
    width: 45%;
    border-radius: 3px;
    margin: 5px 0;
    background: ${({ theme }) => theme.secondary};
    };
  };

  .search {
    display: flex;
    flex-direction: column;
    padding: 5px 20px;

    .post-id-input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 5px 0;
      height: 40px
    }
    
    input {
      font-size: 15px;
      width: 45%;
      height: 27px;
    }

    .css-text-1rynq56 {
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
    };

    .css-view-175oi2r {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 30px;
      border-radius: 3px;
      background: ${({ theme }) => theme.secondary};
    };
    
    .post-getAll, .post-myposts, .post-filter {
      .css-view-175oi2r {
        width: 100%;
        margin: 5px 0;
      };
    };

    .post-id-input .css-view-175oi2r {
      width: 40%;
      margin: 5px 0;
    };
  };

  .invisible {
    display: none;
  }

  .posts-wall {
    display: flex;
    flex-direction: column;
    width: 80%;
  };
`;