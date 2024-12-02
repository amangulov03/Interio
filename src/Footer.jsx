import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp } from "react-icons/io5";
import { MdCurrencyExchange } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { useState } from "react";

const Footer = () => {
    const [color, setColor] = useState("#fff");
    const handleHeartClick = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor = color === "#fff" ? "red" : "#fff";
        setColor(newColor);
    };

    const [color2, setColor2] = useState("#fff");
    const handleHeartClick2 = () => {
        // Если текущий цвет серый, то при клике меняем на красный, иначе возвращаем серый
        const newColor = color2 === "#fff" ? "red" : "#fff";
        setColor2(newColor);
    };

    return (
        <footer>
            <div className="container">
                <div className="main_footer">
                    <div className="foot_1">
                        <h1>INTERIO</h1>
                        <div className="icons">
                            <Link className="fa_icons" to="https://www.facebook.com"><FaFacebookF /></Link>
                            <Link className="fa_icons" to="https://www.instagram.com/"><FaInstagram /></Link>
                            <Link className="fa_icons" to="https://web.tlgrm.app/"><FaTelegramPlane /></Link>
                            <Link className="fa_icons" to="https://www.youtube.com/"><FaYoutube /></Link>
                        </div>
                        <div className="currency">
                            <MdCurrencyExchange className="curr" />
                            <span
                                style={{ color: color }}
                                onClick={() => handleHeartClick("red")}
                            >
                                Сом
                            </span>
                            <div className="heits"></div>
                            <span
                                style={{ color: color2 }}
                                onClick={() => handleHeartClick2("red")}
                            >
                                Доллар
                            </span>
                        </div>
                    </div>
                    <div className="foot_2">
                        <h4>Меню</h4>
                        <nav className="foot_nav">
                            <ul>
                                <li>
                                    <Link className="Link_footer" to="/">
                                        Главная
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link_footer" to="/Catalog">
                                        Каталог
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link_footer" to="/Buyers">
                                        Покупателям
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link_footer" to="/Blog">
                                        Блог
                                    </Link>
                                </li>
                                <li>
                                    <Link className="Link_footer" to="/Contact">
                                        Контакты
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div className="footer_3">
                        <h4>Профиль</h4>
                        <nav className="nav_prof">
                            <Link className="Link_prof" to="#">
                                История заказов
                            </Link>
                            <Link className="Link_prof" to="#">
                                Сравнение товаров
                            </Link>
                            <Link className="Link_prof" to="#">
                                Профиль
                            </Link>
                            <Link className="Link_prof" to="#">
                                Избранное
                            </Link>
                        </nav>
                    </div>
                    <div className="foot_4">
                        <h4>Контакты</h4>
                        <div className="togis">
                            <Link className="location">
                                <IoLocationSharp className="loc"/>
                                <p>г. Бишкек, ул. Киевская</p>
                            </Link>
                        </div>
                        <div className="phone">
                            <Link className="phon">
                                <FaPhoneAlt className="fa_phon"/>
                                <p>+996 501 482 525</p>
                            </Link>
                        </div>
                        <div className="email">
                            <Link className="email_com">
                                <MdEmail className="md_email"/>
                                <p>example@mail.com</p>
                            </Link>
                        </div>
                        <p>New Store © 2024</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
