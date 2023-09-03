import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';

function Header() {
  // const navigate = useNavigate();
  const [toggleButton, setToggleButton] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [loginUserName, setLoginUserName] = useState('');

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  const handleOnClick = () => {};

  const getUserName = () => {};

  useEffect(() => {
    getUserName();
  }, [isLogin, loginUserName]);

  return (
    <header>
      <S.Nav className={toggleButton ? 'on' : 'off'}>
        <S.IconDiv className={toggleButton ? 'on' : 'off'}>
          <div>
            <FaDroplet />
          </div>
          <Link to={'/'}>Bittersweet Korea</Link>
        </S.IconDiv>
        <S.NavDiv className={toggleButton ? 'on' : 'off'}>
          {pages.map((page) => (
            <Link key={page.id} to={page.route}>
              {page.name}
            </Link>
          ))}
        </S.NavDiv>
        {isLogin ? (
          <Link to={'/login'}>
            <S.Button className={toggleButton ? 'on' : 'off'} onClick={handleOnClick} value={loginUserName}>
              {loginUserName}
            </S.Button>
          </Link>
        ) : (
          <S.Button className={toggleButton ? 'on' : 'off'} onClick={handleOnClick} value={loginUserName}>
            🔓LOG-OUT
          </S.Button>
        )}
        <Link to={'#'} onClick={handleToggleButton}>
          <S.FaBarsDiv className={toggleButton ? 'on' : 'off'}>
            <FaBars />
          </S.FaBarsDiv>
        </Link>
      </S.Nav>
    </header>
  );
}
export default Header;

// import { Link, useNavigate } from 'react-router-dom';
// import { useEffect, useState } from 'react';
// import { FaDroplet, FaBars } from 'react-icons/fa6';
// import * as S from './HeaderStyles';
// import { pages } from '../../../utils/constants';

// function Header() {
//   // const navigate = useNavigate();
//   const [toggleButton, setToggleButton] = useState(false);
//   const [isLogin, setIsLogin] = useState(false);
//   const [loginUserName, setLoginUserName] = useState('');

//   const handleToggleButton = () => {
//     setToggleButton(!toggleButton);
//   };

//   const handleOnClick = () => {};

//   const getUserName = () => {};

//   useEffect(() => {
//     getUserName();
//   }, [isLogin, loginUserName]);

//   return (
//     <header>
//       <S.Nav className={toggleButton ? 'on' : 'off'}>
//         <S.IconDiv className={toggleButton ? 'on' : 'off'}>
//           <div>
//             <FaDroplet />
//           </div>
//           <Link to={'/'}>Bittersweet Korea</Link>
//         </S.IconDiv>
//         <S.NavDiv>
//           <S.Ul className={toggleButton ? 'on' : 'off'}>
//             {pages.map((page) => (
//               <li key={page.id}>
//                 <Link to={page.route}>{page.name}</Link>
//               </li>
//             ))}
//           </S.Ul>
//         </S.NavDiv>
//         {isLogin ? (
//           <Link to={'/login'}>
//             <S.Button className={toggleButton ? 'on' : 'off'} onClick={handleOnClick} value={loginUserName}>
//               {loginUserName}
//             </S.Button>
//           </Link>
//         ) : (
//           <S.Button className={toggleButton ? 'on' : 'off'} onClick={handleOnClick} value={loginUserName}>
//             🔓LOG-OUT
//           </S.Button>
//         )}
//         <Link to={'#'} onClick={handleToggleButton}>
//           <S.FaBarsDiv className={toggleButton ? 'on' : 'off'}>
//             <FaBars />
//           </S.FaBarsDiv>
//         </Link>
//       </S.Nav>
//     </header>
//   );
// }
// export default Header;
