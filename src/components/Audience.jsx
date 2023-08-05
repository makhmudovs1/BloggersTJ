import React from 'react';
import logo from "../images/Tajikistanbloggers.svg";
import MyButton from "./UI/button/MyButton";
import "../styles/Audience.css";
import FirstImg from "../images/1.png";
import SecondImg from "../images/6.png";
import ThirdImg from "../images/2.png";
import four from "../images/3.png";
import fifth from "../images/5.png";
import six from "../images/4.png";

const Audience = () => {
    return (
        <div className="audience">
            <div className="container">
                {/*<img className="firstImg" src={FirstImg} alt="First Image"/>*/}
                {/*<img className="secondImg" src={SecondImg} alt="Second IMage"/>*/}
                {/*<img className="thirdImg" src={ThirdImg} alt="Third Image"/>*/}
                {/*<img className="four" src={four} alt="Fourth image"/>*/}
                {/*<img className="five" src={fifth} alt="Fifth image"/>*/}
                {/*<img className="six" src={six} alt="six"/>*/}
                <div className="absolute">
                    <div className="audience__img">
                        <img src={logo} alt="Tajikistan Bloggers"/>
                    </div>
                    <div className="audience__text">
                        <p>
                            Познакомим аудиторию Таджикистана с
                            вашим бизнесом с помощью топ блогеров
                            эффективно и при любом бюджете
                        </p>
                    </div>
                    <MyButton> Подобрать блогеров </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Audience;