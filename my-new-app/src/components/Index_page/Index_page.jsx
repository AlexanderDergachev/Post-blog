import React from 'react';
import hero_image from './icons/hero-image.jpg';
import arrow from './icons/arrow.png';
import chat from './icons/chat.png';
import globus from './icons/globus.png';
import rozetka from './icons/rozetka.png';
import shopping from './icons/shopping.png';
import {Link} from 'react-router-dom';


class Index_page extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="block-1">
          <div className="text-block-1">
            <ul>
              <li>
                <h1>
                  33% сайтов в<br />
                  Интернете  работают на<br />
                  WordPress.
              </h1>
              </li>
              <li>
                Наилучшие возможности WordPress ждут вас здесь.
            </li>
              <li>
                <div className="button-1">
                  <a href="/">Приступайте</a>
                </div>
              </li>
              <li>
                <Link to="create-post" className="new-post">Добавить новый пост</Link>
              </li>
            </ul>
          </div>
          <div className="hero-image-block">
            <img className="hero-image" src={hero_image} alt="hero" />
          </div>
        </div>
        <div className="block-2">
          <div className="head-text padding-text-block-2">
            <h2>
              В основе бесплатное ПО<br />
              для решения самых простых задач.
          </h2>
          </div>
          <div className="text-block-2 padding-text-block-2">
            Создайте начальный вариант сайта, который останется бесплатным всегда — <br />
            никаких кредитных карт. Со временем вы сможете перейти на один из доступных <br />
            тарифных планов с расширенными возможностями:
        </div>
          <div className="elements-2">
            <div className="elements-line-1">
              <div className="element-block-1">
                <div className="icon-chat">
                  <img src={chat} height="80" width="80" alt="chat-icon" />
                </div>
                <div className="label-chat">
                  Круглосуточная поддержка
              </div>
              </div>
              <div className="element-block-2">
                <div className="icon-globus">
                  <img src={globus} height="80" width="80" alt="globus-icon" />
                </div>
                <div className="label-globus">
                  Пользовательское доменное имя
              </div>
              </div>
            </div>
            <div className="elements-line-2">
              <div className="element-block-3">
                <div className="icon-shopping">
                  <img src={shopping} height="80" width="80" alt="shopping-icon" />
                </div>
                <div className="label-shopping">
                  Варианты прямой<br />
                  монетизации сайта
              </div>
              </div>
              <div className="element-block-4">
                <div className="icon-rozetka">
                  <img src={rozetka} height="80" width="80" alt="rozetka-icon" />
                </div>
                <div className="label-rozetka">
                  Тысячи сторонних<br />
                  плагинов и тем
              </div>
              </div>
              <div className="element-block-5">
                <div className="icon-arrow">
                  <img src={arrow} height="80" width="80" alt="arrow-icon" />
                </div>
                <div className="label-arrow">
                  <a href="/">…и многое другое</a>
                </div>
              </div>
            </div>
          </div>
          <div className="button-block-2">
            <div className="button-2">
              <a href="/">Создайте новый сайт</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Index_page;