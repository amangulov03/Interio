import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import imeg1 from "../img/1.jpg";
import imeg2 from "../img/2.jpg";
import imeg3 from "../img/3.jpg";
import imeg4 from "../img/4.jpg";
import imeg5 from "../img/5.jpg";
import imeg6 from "../img/6.jpg";
import imeg7 from "../img/7.jpg";
import list_img from "../img/lis-1.png";
import bg_img from "../img/bg-slide-1-ratio-width-1200-jpg.webp";

import new_img from "../img/dyvan2-ratio-width-500-jpg.webp";
import new_img2 from "../img/komod2-ratio-width-500-jpg.webp";
import new_img3 from "../img/lizhko2-ratio-width-500-jpg.webp";
import new_img4 from "../img/obidniy-stil-ratio-width-500-jpg.webp";
import new_img5 from "../img/shafa-kupe1-ratio-width-500-jpg.webp";
import new_img6 from "../img/stilets-novyy1-ratio-width-500-jpg.webp";

import { useState } from "react";

import list_img_2 from "../img/bg-slide-2-ratio-width-1200-jpg.webp";
import list_img_3 from "../img/Screenshot_2024-02-27_171047-removebg-preview.png";

import left_img_1 from "../img/left_1.jpg";
import left_img_2 from "../img/left_2.jpg";
import center_img from "../img/center_img.jpg";
import right_img_1 from "../img/right_1.jpg";
import right_img_2 from "../img/right_2.jpg";

import { IoIosClose } from "react-icons/io";

function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: "block",
                color: "red",
            }}
            onClick={onClick}
        />
    );
}

const Home = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                },
            },
        ],
    };

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

    const [NodalActive, setModalActive] = useState(false);

    return (
        <>
            <section className="section_a">
                <div className="container">
                    <div className="title">
                        <h1>УНИКАЛЬНЫЕ ДИЗАЙНЫ</h1>
                        <p>
                            От модульной сборки к встроенным зарядным
                            устройствам. Мы всегда стремимся добавить новые
                            функциональные особенности
                        </p>
                        <Link to="/Catalog">
                            <button>В КАТАЛОГ</button>
                        </Link>
                    </div>
                </div>
            </section>
            <section className="section_b">
                <div className="container">
                    <h2>Популярные категории</h2>
                    <Slider {...settings}>
                        <div className="card">
                            <div className="box">
                                <img src={imeg1} alt="" className="w-100" />
                                <div className="card_body">
                                    <p>Диваны</p>
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg2} alt="" />
                            <div className="card_body">
                                <p>Кресла</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg3} alt="" />
                            <div className="card_body">
                                <p>Кровати</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg4} alt="" />
                            <div className="card_body">
                                <p>Шкафы</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg5} alt="" />
                            <div className="card_body">
                                <p>Комоды</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg6} alt="" />
                            <div className="card_body">
                                <p>Столы</p>
                            </div>
                        </div>
                        <div className="card">
                            <img src={imeg7} alt="" />
                            <div className="card_body">
                                <p>Стулья</p>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
            <section className="section_c">
                <div className="container">
                    {NodalActive && (
                        <div>
                            <div
                                className="modal-overlay"
                                onClick={() => setModalActive(false)}
                            ></div>
                            <div className={"modal active"}>
                                <IoIosClose
                                    className="close"
                                    onClick={() => setModalActive(false)}
                                />
                                <h3>Lorem</h3>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Nihil eum, ipsum dolore
                                    aperiam, veniam sapiente laborum eos commodi
                                    reprehenderit accusamus libero, explicabo
                                    ducimus placeat odio!
                                </p>
                            </div>
                        </div>
                    )}
                    <div className="main_text">
                        <div className="text">
                            <img src={list_img} alt="" className="list_img" />
                            <h4>Что для нас важно?</h4>
                            <ul>
                                <li>хорошо продуманный интерьер</li>
                                <li>
                                    соответствие индивидуальным потребностям
                                </li>
                                <li>коллекции с гарантией качества</li>
                            </ul>
                            <p>
                                Мы хотим, чтобы вы жили лучше – если вы тоже –
                                свяжитесь с нами.
                            </p>
                            <button onClick={() => setModalActive(true)}>
                                Подробнее
                            </button>
                        </div>
                    </div>
                </div>
                <img src={bg_img} alt="" className="bd_img" />
            </section>

            <section className="sectiom_d">
                <div className="container">
                    <h2>Наша новая коллекция</h2>
                    <Slider {...settings}>
                        <div className="card">
                            <img src={new_img6} alt="" className="w-100" />
                            <div
                                style={{ color: color }}
                                className="heart"
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
                        <div className="card">
                            <img src={new_img4} alt="" />
                            <div
                                style={{ color: color1 }}
                                className="heart"
                                onClick={handleHeartClick1}
                            >
                                <FavouriteIcon />
                            </div>
                            <div className="text_card">
                                <h4>Обеденный стол Новый Стиль AQUA</h4>
                                <p>
                                    Круглый стол на перекрещивающихся
                                    металлических ножках
                                </p>
                                <span>2 999$</span>
                                <button>КУПИТЬ</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={new_img5} alt="" />
                            <div
                                style={{ color: color2 }}
                                className="heart"
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
                        <div className="card">
                            <img src={new_img} alt="" />
                            <div
                                style={{ color: color3 }}
                                className="heart"
                                onClick={handleHeartClick3}
                            >
                                <FavouriteIcon />
                            </div>
                            <div className="text_card">
                                <h4>Угловой диван Лидер Modern</h4>
                                <p>
                                    Раскладной ортопедический для ежедневного
                                    сна
                                </p>
                                <span>15 000$</span>
                                <button>КУПИТЬ</button>
                            </div>
                        </div>
                        <div className="card">
                            <img src={new_img2} alt="" />
                            <div
                                style={{ color: color4 }}
                                className="heart"
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
                        <div className="card">
                            <img src={new_img3} alt="" />
                            <div
                                style={{ color: color5 }}
                                className="heart"
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
                    </Slider>
                </div>
            </section>
            <section className="section_e">
                <div className="main_like">
                    <img src={list_img_2} alt="" className="list_img_2" />
                    <div className="container">
                        <div className="like">
                            <img
                                src={list_img_3}
                                alt=""
                                className="list_img_3"
                            />
                            <h3>Дизайн для любого пространства</h3>
                            <p>
                                Мы подберем для вас маленькое, большое, угловое
                                и овальное, деревянное и стеклянное – разная
                                мебель для любого пространства, потому что
                                каждый достоин нашего внимания.
                            </p>
                            <Link to={"/Catalog"}>
                                <button>Подробнее</button>
                            </Link>
                        </div>
                    </div>
                    <div className="bg_black"></div>
                </div>
            </section>
            <section className="section_img">
                <div className="container">
                    <div className="main_img">
                        <div className="left_img">
                            <div className="lef_img_1">
                                <img
                                    id="left_img_1_image"
                                    src={left_img_1}
                                    alt=""
                                    className="hover_img"
                                />
                                <p className="hover_p">
                                    Комплект обеденный Блэк Стил черный
                                </p>
                            </div>
                            <div className="lef_img_2">
                                <img
                                    id="left_img_1_image"
                                    src={left_img_2}
                                    alt=""
                                    className="hover_img"
                                />
                                <p className="hover_p">
                                    Диван RedKing Грейс Люкс плюс белый
                                </p>
                            </div>
                        </div>
                        <div className="center_img">
                            <div className="center_img_1">
                                <img
                                    id="left_img_1_image"
                                    src={center_img}
                                    alt=""
                                    className="hover_img"
                                />
                                <p className="hover_p">
                                    Обеденный стол Коннектикут Массив Ясень
                                    Коричневый
                                </p>
                            </div>
                        </div>
                        <div className="right_img">
                            <div className="right_img_1">
                                <img
                                    id="left_img_1_image"
                                    src={right_img_1}
                                    alt=""
                                    className="hover_img"
                                />
                                <p className="hover_p">
                                    Комплект мягкой мебели диван + кресла Стелла
                                </p>
                            </div>
                            <div className="right_img_2">
                                <img
                                    id="left_img_1_image"
                                    src={right_img_2}
                                    alt=""
                                    className="hover_img"
                                />
                                <p className="hover_p">
                                    Табурет Софи черный кожзам Скаден
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
