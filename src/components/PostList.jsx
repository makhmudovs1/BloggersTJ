import React, {useState} from 'react';
import PostListModal from "./PostListModal";
import image from "../images/Color.png";
import MyButton from "./UI/button/MyButton";
import {logDOM} from "@testing-library/react";

const PostList = ({posts, count, setCount, arr, setArr}) => {
    const [active, setActive] = useState(false);
    const [clickedBlocks, setClickedBlocks] = useState({});
    const [selectedBlocks, setSelectedBlocks] = useState([]);

    const handleCheckboxClick = (blockId) => {
        if (selectedBlocks.includes(blockId)) {
            setSelectedBlocks(prevSelectedBlocks => prevSelectedBlocks.filter(id => id !== blockId));
        } else {
            setSelectedBlocks(prevSelectedBlocks => [...prevSelectedBlocks, blockId]);
        }
    };
    const [selectedUsers, setSelectedUsers] = useState([]);
    const handleIncrement = (blockId, post) => {
        if (!clickedBlocks[blockId]) {
            setCount(prevCount => prevCount + 1);

            // Помечаем блок как уже нажатый
            setClickedBlocks(prevClickedBlocks => ({
                ...prevClickedBlocks,
                [blockId]: true
            }));
            arr.push(post);
        } else {
            setCount(prevCount => prevCount - 1);
            // Помечаем блок как не нажатый
            setClickedBlocks(prevClickedBlocks => ({
                ...prevClickedBlocks,
                [blockId]: false
            }));

        }

    };
    const handleClick = (blockId, post) => {
        console.log(selectedUsers);
        if (!selectedUsers.some(user => user.id === post.id)) {
            setSelectedUsers(prevUsers => [...prevUsers, post]);
        } else {
            setSelectedUsers(prevUsers => prevUsers.filter(user => user.id !== post.id));
        }
    };

    return (
            <div className="posts">
                {posts.map((post) => (
                    <div className={`posts__blogger ${selectedBlocks.includes(post.id) ? 'selected' : ''}`}>
                        <div className="mark">
                            <div className="mark__id"> {post.id} </div>
                            <div className="mark__check ">
                                <input type="checkbox" className="checkbox" name="checkbox" checked={selectedBlocks.includes(post.id)} />
                            </div>
                        </div>
                        <div className="blogger__img"  onClick={() => setActive(true)}>{post.img}</div>
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
                        <div className={`blogger__link ${selectedBlocks.includes(post.id) ? 'selected' : ''}`} onClick={() => {handleCheckboxClick(post.id); handleClick(post.name, post); handleIncrement(post.name, post);}}>
                            <span></span>
                        </div>
                    </div>
                ))}
            </div>
    );
};

export default PostList;