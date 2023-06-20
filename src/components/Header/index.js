import { useLocation } from 'react-router-dom';

import { Container } from './styles';

import bakoads from '../../assets/images/bakoads.png';
import menu from '../../assets/images/icons/menuMobile.svg';
import xCirclePrimary from '../../assets/images/icons/xCirclePrimary.svg';

export default function Header() {
  const location = useLocation();

  const showLinks =
    location.pathname === `/admin/dashboard` ||
    location.pathname === `/admin/account`;

  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    let icon = document.querySelector('.icon');

    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      if (icon) {
        icon.src = menu;
      }
    } else {
      menuMobile.classList.add('open');
      if (icon) {
        icon.src = xCirclePrimary;
      }
    }
  }

  return (
    <>
      <Container>
        {showLinks ? (
          <>
            <nav className="nav-bar">
              <div className="logo">
                <img src={bakoads} alt="Bakoads" />
              </div>

              <div className="nav-list">
                <ul>
                  <li className="nav-item">
                    <a href="./dashboard" className="nav-link">
                      Início
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="../../users" className="nav-link">
                      Usuários
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mobile-menu-icon">
                <button onClick={menuShow}>
                  <img className="icon" src={menu} alt="Mobile menu icon" />
                </button>
              </div>
            </nav>

            <div className="mobile-menu nav-list">
              <ul>
                <li className="nav-item">
                  <a href="./dashboard" className="nav-link">
                    Início
                  </a>
                </li>
                <li className="nav-item">
                  <a href="../../users" className="nav-link">
                    Usuários
                  </a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <div className="banner">
            <img src={bakoads} alt="Bakoads" />
          </div>
        )}
      </Container>
    </>
  );
}
