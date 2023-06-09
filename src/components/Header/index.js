import { Container } from './styles';

import bakoads from '../../assets/images/bakoads.png';
import menu from '../../assets/images/icons/menuMobile.svg';
import xCirclePrimary from '../../assets/images/icons/xCirclePrimary.svg';

export default function Header() {
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
        <nav className="nav-bar">
          <div className="logo">
            <img src={bakoads} alt="Bakoads" />
          </div>

          <div className="nav-list">
            <ul>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Início
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Projetos
                </a>
              </li>
            </ul>
          </div>

          <div className="login-button">
            <button>
              <a href="">Entrar</a>
            </button>
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
              <a href="#" className="nav-link">
                Início
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Sobre
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Projetos
              </a>
            </li>
          </ul>

          <div className="login-button">
            <button>
              <a href="">Entrar</a>
            </button>
          </div>
        </div>
      </Container>
    </>
  );
}
