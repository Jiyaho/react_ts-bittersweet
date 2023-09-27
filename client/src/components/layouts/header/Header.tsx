import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaDroplet, FaBars } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import * as S from './HeaderStyles';
import { pages } from '../../../utils/constants';
import HeaderLogin from './HeaderLogin';

function Header() {
  const [toggleButton, setToggleButton] = useState(false);

  const handleToggleButton = () => {
    setToggleButton(!toggleButton);
  };

  return (
    <S.Header>
      <nav className={toggleButton ? 'on' : 'off'}>
        <S.LogoDiv className={toggleButton ? 'on' : 'off'}>
          <div>
            <FaDroplet />
          </div>
          <Link to={'/'}>Bittersweet Korea</Link>
        </S.LogoDiv>
        <S.NavPagesDiv className={toggleButton ? 'on' : 'off'}>
          {pages.map((page) => (
            <Link key={page.id} to={page.route}>
              {page.name}
            </Link>
          ))}
        </S.NavPagesDiv>

        <HeaderLogin className={toggleButton ? 'on' : 'off'} />

        {/* <Link to="" onClick={handleToggleButton}>
          <S.FaBarsDiv className={toggleButton ? 'on' : 'off'}>
            <FaBars />
          </S.FaBarsDiv>
        </Link> */}

        <S.FaBarsDiv>
          {toggleButton ? (
            <button className="on" onClick={handleToggleButton}>
              <AiOutlineClose />
            </button>
          ) : (
            <button className="off" onClick={handleToggleButton}>
              <FaBars />
            </button>
          )}
        </S.FaBarsDiv>
      </nav>
    </S.Header>
  );
}
export default Header;
