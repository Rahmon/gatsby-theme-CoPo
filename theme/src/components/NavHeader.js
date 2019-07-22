import styled from 'styled-components';

const NavHeader = styled.nav`
     margin: 1.625rem 0; 
     & > ul {
         margin: 0;
         padding: 0;
         list-style: none;
         & > li {
            display: inline-block;
            margin-right: 1.125rem;
            margin-bottom: .28rem;
         }
     }
     
`;
 
export default NavHeader;