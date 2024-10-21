import React from 'react';
import logo from '../../assets/main.logo.jpg';
import './Main.scss'

const Main = () => {
    return (
        <main className="main">
            <section className="home">
                <div className="container">
                    <div className="home__sides">
                        <div className="home__sides-left">
                            <h1 className="home__sides-title"><b>Быстрая доставка <br/>
                                товаров из Польши <br/>
                                и стран Еврорзоюза <br/>
                                в Украину</b></h1>
                            <p className="home__sides-des">
                                оцени новый уровень в качестве <br/>
                                обслуживания и скорости доставки
                            </p>
                            <form action="" className="home__sides-form">
                                <input placeholder="         Вставить ссылку на товар" type="search" className="home__sides-input"/>
                                <button className="home__sides-btn">Заказать</button>
                            </form>
                        </div>
                        <div className="home__sides-left">
                            <img src={logo} alt="" className="home__sides-img"/>
                            <img src={logo} alt="" className="home__sides-img2"/>
                            <img src={logo} alt="" className="home__sides-img3"/>
                            <img src={logo} alt="" className="home__sides-img4"/>
                            <img src={logo} alt="" className="home__sides-img5"/>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Main;