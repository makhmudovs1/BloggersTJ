import React from 'react';
import "../styles/HeaderModal.css";
import image from "../images/Color.png";

const HeaderModal = ({active, setActive, post, setArr}) => {
    const handleClick = (userId) => {
        setArr(prevArr => prevArr.filter(id => id !== userId));
    }
    return (
        <div className={active ? "new-modal tactive" : "modal"}>
            <div className={active ? "new-modal__content tactive" : "new-modal__content"} onClick={e => e.stopPropagation()}>
                <div className="new-form">
                    <a href="#" className="form__cross">
                        <img src={image} alt="cross" onClick={() => setActive(false)}/>
                    </a>
                    <div className="users">
                        {post.map((posts) => (
                            <div
                                className={`user-block ${post.includes(posts.id) ? 'selected' : ''}`}
                                onClick={() => handleClick(posts.id)}
                                key = {post.id}>
                                <div className="post__name">
                                    {post.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderModal;