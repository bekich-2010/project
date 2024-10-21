import React from 'react';
import logo from '../../assets/prij.info.jpg'
import logo2 from '../../assets/Vector (1).png'
import logo3 from '../../assets/ukr.jpg'
import logo4 from '../../assets/vec.jpg'
import './Header.scss'

const Header = () => {
    return (
        <haeder className="header">
            <div className="container">
                <div className="header__row">
                    <img src={logo} alt="" className="header__row-img"/>
                    <div className="header__row-info">
                        <h4 className="header__row-mess">Наши мессенджеры</h4>
                        <img src={logo2} alt="" className="header__row-tel"/>
                        <h4 className="header__row-em">info@poland24.com.ua</h4>
                    </div>
                    <div className="header__row-counter">
                        <h4 className="header__row-count">'zł  <span className="header__row-span">00,00</span></h4>
                        <h4 className="header__row-count">€  <span className="header__row-span">00,00</span></h4>
                    </div>
                    <button className="header__row-btn">Оформить заказ</button>
                    <div className="log/reg">
                        <a href="" className="header__row-login">Вход</a>
                        /
                        <a href="" className="header__row-register">Регистрация</a>
                    </div>
                    <div className="header__row-lang">
                        <img src={logo3} alt="" className="header__row-langimg"/>
                        <span className="header__row-spanlang">Укр</span>
                        <img src={logo4} alt="" className="header__row-vec"/>
                    </div>
                </div>
                <div className="header__row2">
                    <nav className="header__nav">
                        <a href="" className="header__nav-link">О компании </a>
                        <a href="" className="header__nav-link">Список магазину</a>
                        <a href="" className="header__nav-link">Отзывы</a>
                        <a href="" className="header__nav-link">Вопрос-ответ</a>
                        <a href="" className="header__nav-link">Калькулятор</a>
                        <a href="" className="header__nav-link">Контакты</a>
                        <button className="header__nav-btn">Помощь в поиске товаров</button>
                    </nav>
                </div>
            </div>
        </haeder>
    );
}

export default Header;