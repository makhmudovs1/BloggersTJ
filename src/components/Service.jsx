import React from 'react';
import "../styles/Service.css";
import img from "../images/frame.svg";

const Service = () => {
    const arr = [
        {
            price: '40 млн',
            text: 'Общее количество пользователей у наших блогеров во всех социальных сетях',

        },
        {
            price: '50 млн',
            text: 'Суммарная аудитория блогеров \n' +
                ' на мировых платформах ',
        },
        {
            price: '600+',
            text: 'Более 600 блогеров \n' +
                'готовых рекламировать ваш продукт',
        },
    ];
    return <>
        <div className="service">
            <div className="container">
                <div className="service__text">
                    <h1>
                        сервис по запуску рекламы и
                        работы с блогерами из солнечного таджикистана
                    </h1>
                </div>
                <div className="block">
                    {arr.map((item) => (
                        <div className="frame">
                            <img className="frame__img" src={img} alt="Frame"/>
                            <div className="item">
                                <h2 className="block__title">
                                    {item.price}
                                </h2>
                                <div className="block__text">
                                    {item.text}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>
};

export default Service;