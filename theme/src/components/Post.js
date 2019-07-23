import styled from 'styled-components';

const Post = styled.article`
  & + article {
    margin-top: 4rem;
  }
`

export default Post;