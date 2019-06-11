import React from 'react';
import logo from './icons/logo.png';
import './Index_page/index.css';
import {Link} from 'react-router-dom';

class Header extends React.Component{
    myFunction() {
      var x = document.getElementById('myNav');
      var x2 = document.getElementById('myHeader');

      if (x.className === "my-nav") {
        x.className += " active";
      } else {
        x.className = "my-nav";
      }

      if (x2.className === "my-header") {
        x2.className += " active";
      } else {
        x2.className = "my-header";
      }
    }
    render(){
        return(
          <React.Fragment>
            <header className="my-header" id="myHeader">
              <div className="logo-elements">
                <Link to="/" className="logo"><img src={logo} width="32" height="32" alt="logo" /></Link>
                <Link to="/">WordPress.com</Link>
              </div>
              <nav>
                <div className="my-nav" id="myNav">
                  <Link to="/posts">Посты</Link>
                  <Link to="/">Возможности</Link>
                  <a href="/">Ресурсы</a>
                  <a href="/">Тарифные планы и цены</a>
                  <Link to="/register">Регистрация</Link>
                  <a href="/">Войти</a>
                  <a href="#" id="menu" className="icon" onClick={this.myFunction}>&#9776;</a>
                </div>
              </nav>
            </header>                
          </React.Fragment>
        )
    }
}
export default Header;