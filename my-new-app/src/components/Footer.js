import React from 'react';
import {Link} from 'react-router-dom';

class Footer extends React.Component{
    render(){
        return(
            <React.Fragment>
              <footer>
                <div className="list-pair-1">
                  <div className="list-block-1">
                    <div className="list-block-1-title">
                      ДРУГИЕ РЕШЕНИЯ WORDPRESS
                  </div>
                    <div>
                      <ul>
                        <li>
                          <a href="/">Плагин Jetpack</a>
                        </li>
                        <li>
                          <a href="/">WooCommerce</a>
                        </li>
                        <li>
                          <a href="/">Pressable (управляемый хостинг)</a>
                        </li>
                        <li>
                          <a href="/">VIP (корпоративный хостинг)</a>
                        </li>
                        <li>
                          <a href="/">Разработчики</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-block-2">
                    <div className="list-block-2-title">
                      ПРОСМОТР
                  </div>
                    <div>
                      <ul>
                        <li>
                          <a href="/">Новости</a>
                        </li>
                        <li>
                          <a href="/">Открыть</a>
                        </li>
                        <li>
                          <a href="/">Go: контент для роста</a>
                        </li>
                        <li>
                          <a href="/">Приложения для настольных систем</a>
                        </li>
                        <li>
                          <a href="/">Мобильные приложения</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="list-pair-2">
                  <div className="list-block-3">
                    <div className="list-block-3-title">
                      СООБЩЕСТВО
                  </div>
                    <div>
                      <ul>
                        <li>
                          <a href="/">Поддержка</a>
                        </li>
                        <li>
                          <a href="/">Форумы</a>
                        </li>
                        <li>
                          <a href="/">WordCamps</a>
                        </li>
                        <li>
                          <a href="/">WordPress.org</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="list-block-4">
                    <div className="list-block-4-title">
                      КОМПАНИЯ
                  </div>
                    <div>
                      <ul>
                        <li>
                          <a href="/about-us">О нас</a>
                        </li>
                        <li>
                          <Link to="/contacts">Контакты</Link>
                        </li>
                        <li>
                          <a href="/">Условия использования</a>
                        </li>
                        <li>
                          <a href="/">Matt Mullenweg</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </footer>
            </React.Fragment>
        )
    }
}

export default Footer;