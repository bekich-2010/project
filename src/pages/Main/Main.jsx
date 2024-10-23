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
                                <input placeholder="Вставить ссылку на товар" type="search" className="home__sides-input"/>
                                <button className="home__sides-btn">Заказать</button>
                            </form>
                        </div>
                        <div className="home__sides-left">
                            <img src={logo} alt="" className="home__sides-img"/>
                            <img src={logo} alt="" className="home__sides-img2"/>
                            <img src={logo} alt="" className="home__sides-img3"/>
                            <img src={logo} alt="" className="home__sides-img4"/>
                            {/*<img src={logo} alt="" className="home__sides-img5"/>*/}
                        </div>
                    </div>
                </div>
            </section>
            <section className="works">
                <div className="container">
                    <h2 className="works__title">Как это работает</h2>
                    <div className="works__flex">
                        <div className="works__inst">
                            <h3 className="works__subtitle">Вы выбираете товар </h3>
                            <h2 className="works__num">01</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                        <div className="works__inst">
                            <h3 className="works__subtitle">Предоставляете ссылку</h3>
                            <h2 className="works__num">02</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                        <div className="works__inst">
                            <h3 className="works__subtitle">Внести предоплату</h3>
                            <h2 className="works__num">03</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                        <div className="works__inst">
                            <h3 className="works__subtitle">Выкупаем товар и везем в Украину</h3>
                            <h2 className="works__num">04</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                        <div className="works__inst">
                            <h3 className="works__subtitle">Оплатить остаток</h3>
                            <h2 className="works__num">05</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                        <div className="works__inst">
                            <h3 className="works__subtitle">Получите товар </h3>
                            <h2 className="works__num">06</h2>
                            <p className="works__step">Каждый <br/>
                                веб-разработчик <br/>
                                знает, что такое <br/>
                                текст-«рыба». Текст <br/>
                                этот, несмотря на <br/>
                                название, не имеет <br/>
                                никакого отношения к <br/>
                                обитателям водоемов.</p>
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
};

export default Main;