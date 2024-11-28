import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Header = styled.div`
   background-color: #f4f4f4;
   height: 100%;
   display: flex;
   justify-content: space-between;
   padding: 31px;
   & .block-left {
      font-size: 32px;
      font-weight: 600;
   }
   & .block-right {
      & a {
         display: inline-block;
         margin-left: 20px;
         text-decoration: none;
      }
   }
`;
const Main = styled.div`
   height: calc(100vh - 150px);
   padding: 20px;
   display: flex;
   justify-content: center;
   align-items: center;
`;

const PublicLayout = () => {
   return (
      <Fragment>
         <Header>
            <div className='block-left'>Logo</div>

            <div className='block-right'>
               <Link to='/login'>Login</Link>
               <Link to='/register'>Register</Link>
            </div>
         </Header>

         <Main>
            <Outlet />
         </Main>
      </Fragment>
   );
};

export default PublicLayout;
