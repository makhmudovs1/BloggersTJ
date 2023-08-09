import React from 'react';
import "../styles/HeaderModal.css";
import image from "../images/Color.png";

const HeaderModal = ({active, setActive, post, setArr, count, selectedUsers, setSelectedUsers}) => {
    const text = 'БЛОГЕРА';

    return (
        <div className={active ? "new-modal tactive" : "modal"}>
            <div className={active ? "new-modal__content tactive" : "new-modal__content"} onClick={e => e.stopPropagation()}>
                <div className="new-form">
                    <a href="#" className="form__cross">
                        <img src={image} alt="cross" onClick={() => setActive(false)}/>
                    </a>
                    <div className="info">
                        <div className="info__count">
                            Выбрано {count} блогеров
                        </div>
                        <div className="info__avg">
                            Средние показатели
                        </div>
                    </div>
                    <div className="users">
                        {post.map((user) => (
                            !selectedUsers.some(selectedUser => selectedUser.id === user.id) ? (
                                <div className="user-block" key={user.id}>
                                    <div className="users__about">
                                        <div className="users__cross">
                                            <img src={image} alt="cross" className="user__cross"/>
                                        </div>
                                        <div className="user__img">
                                            {/*<img src="#" alt="user image"/>*/}
                                        </div>
                                        <div className="user__info">
                                            <div className="user__name">
                                                {user.name}
                                            </div>
                                            <div className="user__followers">
                                                {user.followers}
                                            </div>
                                        </div>
                                    </div>
                                    {/*<div className="users__avg"></div>*/}
                                </div>
                            ) : null
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderModal;