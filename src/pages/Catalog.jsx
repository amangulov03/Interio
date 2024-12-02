import React from "react";
import "./Catalog.css";
import { Link } from "react-router-dom";

import { useState } from "react";

import new_img from "../img/dyvan2-ratio-width-500-jpg.webp";
import new_img2 from "../img/komod2-ratio-width-500-jpg.webp";
import new_img3 from "../img/lizhko2-ratio-width-500-jpg.webp";
import new_img4 from "../img/obidniy-stil-ratio-width-500-jpg.webp";
import new_img5 from "../img/shafa-kupe1-ratio-width-500-jpg.webp";
import new_img6 from "../img/stilets-novyy1-ratio-width-500-jpg.webp";

const Catalog = () => {
    const FavouriteIcon = (props) => (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            {...props}
        >
            <path
                d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
            />
        </svg>
    );

    const [color, setColor] = useState("#a7a7a7");
    const handleHeartClick = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor = color === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor(newColor);
    };

    const [color1, setColor1] = useState("#a7a7a7");
    const handleHeartClick1 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor1 = color1 === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor1(newColor1);
    };

    const [color2, setColor2] = useState("#a7a7a7");
    const handleHeartClick2 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor2 = color2 === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor2(newColor2);
    };

    const [color3, setColor3] = useState("#a7a7a7");
    const handleHeartClick3 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor3 = color3 === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor3(newColor3);
    };

    const [color4, setColor4] = useState("#a7a7a7");
    const handleHeartClick4 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor4 = color4 === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor4(newColor4);
    };

    const [color5, setColor5] = useState("#a7a7a7");
    const handleHeartClick5 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor5 = color5 === "#a7a7a7" ? "red" : "#a7a7a7";
        setColor5(newColor5);
    };

    return (
        <section className="section_1">
            <h6>Каталог</h6>
            <div className="container">
                <div className="left_box">
                    <div className="catalog">
                        <ul>
                            <li>
                                <Link className="a">Диваны</Link>
                            </li>
                            <li>
                                <Link className="a">Кресла</Link>
                            </li>
                            <li>
                                <Link className="a">Кровати</Link>
                            </li>
                            <li>
                                <Link className="a">Шкафы</Link>
                            </li>
                            <li>
                                <Link className="a">Комоды</Link>
                            </li>
                            <li>
                                <Link className="a">Столы</Link>
                            </li>
                            <li>
                                <Link className="a">Стулья</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mebeli">
                    <div className="card1">
                        <img src={new_img6} alt="" className="w-100" />
                        <div
                            style={{ color: color }}
                            className="heart1_1"
                            onClick={handleHeartClick}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Стул Новый Стиль NICOLE</h4>
                            <p>С боковыми бортами</p>
                            <span>2 500$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={new_img4} alt="" />
                        <div
                            style={{ color: color1 }}
                            className="heart1_2"
                            onClick={handleHeartClick1}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Обеденный стол Новый Стиль AQUA</h4>
                            <p>
                                Круглый стол на перекрещивающихся металлических
                                ножках
                            </p>
                            <span>2 999$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={new_img5} alt="" />
                        <div
                            style={{ color: color2 }}
                            className="heart1_3"
                            onClick={handleHeartClick2}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Шкаф-купе Феникс</h4>
                            <p>Трехдверный, Дуб сонома</p>
                            <span>98 990$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </div>
                <div className="mebeli">
                    <div className="card1">
                        <img src={new_img} alt="" />
                        <div
                            style={{ color: color3 }}
                            className="heart1_4"
                            onClick={handleHeartClick3}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Угловой диван Лидер Modern</h4>
                            <p>Раскладной ортопедический для ежедневного сна</p>
                            <span>15 000$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={new_img2} alt="" />
                        <div
                            style={{ color: color4 }}
                            className="heart1_5"
                            onClick={handleHeartClick4}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Большой комод для дома Эверест</h4>
                            <p>Венге + дуб молочный</p>
                            <span>3 300$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                    <div className="card1">
                        <img src={new_img3} alt="" />
                        <div
                            style={{ color: color5 }}
                            className="heart1_6"
                            onClick={handleHeartClick5}
                        >
                            <FavouriteIcon />
                        </div>
                        <div className="text_card">
                            <h4>Кровать двуспальная Chester Comfort</h4>
                            <p>С подъемным механизмом и нишей для белья</p>
                            <span>12 999$</span>
                            <button>КУПИТЬ</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Catalog;
