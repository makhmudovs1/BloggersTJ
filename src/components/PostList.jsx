import React, {useEffect, useState} from 'react';
import PostListModal from "./PostListModal";
import image from "../images/Color.png";
import MyButton from "./UI/button/MyButton";

const PostList = ({posts}) => {
    const [active, setActive] = useState(false);
    const [count, setCount] = useState(1);
    const handleIncrement = () => {
        setCount(count + 1);
        console.log(count);
    }
    // const [markActive, setMarkActive] = useState(false);
    // useEffect(() => {
    //     const checkbox = document.querySelector(".checkbox");
    //     const item = checkbox.closest('.checkbox');
    //     // console.log(item);
    //     // checkbox.textContent = 'Выбрано';
    // }, []);
    return (
        <div className="posts">
            {posts.map((post) => (
                <div className="posts__blogger">
                    <div className="mark">
                        <div className="mark__id"> {post.id} </div>
                        <div className="mark__check" onClick={handleIncrement}>
                            <input type="checkbox" className="checkbox" name="checkbox"/>
                        </div>
                    </div>
                    <div className="blogger__img"  onClick={() => setActive(true)}></div>

                    <PostListModal active={active} setActive={setActive}>
                        <a href="#" className="new-cross">
                            <img src={image} alt="cross" onClick={() => setActive(false)}/>
                        </a>
                        <div className="form-container">

                            <div className="img"></div>
                            <div className="fields">
                                <div className="title">
                                    {post.name}
                                </div>
                                <div className="new-followers">
                                    <div className="new-followers__text">
                                        Подписчиков:
                                    </div>
                                    <div className="new-followers__count"> {post.followers} </div>
                                </div>
                                <div className="new-likes">
                                    <div className="new-likes__text">
                                        Лайков:
                                    </div>
                                    <div className="new-likes__count"> {post.likes} </div>
                                </div>
                                <div className="comments">
                                    <div className="comments__text">
                                        Комментариев:
                                    </div>
                                    <div className="comments__count"> 1256 </div>
                                </div>
                                <div className="live">
                                    <div className="live__text">
                                        Просмотров эфира:
                                    </div>
                                    <div className="live__count"> 1,8 млн </div>
                                </div>
                                <div className="index">
                                    <div className="index__text">
                                        Индекс вовлечённости:
                                    </div>
                                    <div className="index__count"> 12,9% </div>
                                </div>
                                <MyButton>
                                    Выбрать блогера
                                </MyButton>
                            </div>
                        </div>
                    </PostListModal>


                    <div className="blogger__name"> {post.name} </div>
                    <div className="followers">
                        <div className="followers__text">
                            Подписчиков:
                        </div>
                        <div className="followers__count"> {post.followers} </div>
                    </div>
                    <div className="likes">
                        <div className="likes__text">
                            Лайков:
                        </div>
                        <div className="likes__count"> {post.likes} </div>
                    </div>
                    <div className="blogger__link">
                        <span></span>
                    </div>
                </div>

            ))}
        </div>
    );
};

export default PostList;