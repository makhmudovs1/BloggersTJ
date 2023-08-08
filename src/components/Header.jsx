import React, {useState} from 'react';
import logo from "../images/tjkbloggers.png";
import "../styles/Header.css";
import MyModal from "./UI/modal/MyModal";
import MyButton from "./UI/button/MyButton";
import image from "../images/Color.png";
import HeaderModal from "./HeaderModal";

const Header = ({count, arr, setArr}) => {
    const [modalActive, setModalActive] = useState(false);
    const [activeModal, setActiveModal] = useState(false);
    return (
        <div className="container">
            <div className="header">
                <img src={logo} alt="#"/>
                <div className="btn">
                    <button className="btn__left"  onClick={() => setActiveModal(true)}>
                        Выбрано блогеров <div className={count === 0 ? "none" : "btn__count"}> {count} </div>
                    </button>
                    <button className="btn__right" onClick={() => setModalActive(true)}>
                        Отправить заявку
                    </button>
                    <MyModal active={modalActive} setActive={setModalActive}>
                        <div className="register-form-container">
                            <a href="#" className="cross">
                                <img src={image} alt="cross" onClick={() => setModalActive(false)}/>
                            </a>
                            <h2 className="form__title">
                                Отправьте заявку
                            </h2>
                            <div className="form-fields">
                                <div className="form-field">
                                    <input type="text" placeholder="Ваше имя"/>
                                </div>
                                <div className="form-tel">
                                    <input type="text" placeholder="Номер телефона"/>
                                    <input type="text" placeholder="E-mail"/>
                                </div>
                                <textarea name="Комментарии" cols="30" rows="10" placeholder="Комментарии">
                                </textarea>
                                <MyButton>
                                    Отправить
                                </MyButton>
                            </div>
                        </div>
                    </MyModal>
                    <HeaderModal active={activeModal} setActive={setActiveModal} post={arr} setArr={setArr}/>
                </div>
            </div>
        </div>
    );
};

export default Header;