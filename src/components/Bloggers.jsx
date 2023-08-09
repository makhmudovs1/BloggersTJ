import React, {useState, useEffect} from 'react';
import "../styles/Bloggers.css";
import PostList from "./PostList";
import Pagination from "./pagination";
import FirstArrow from "../images/Arrow1.png";
import SecondArrow from "../images/Arrow2.png";

const Bloggers = ({count, setCount, arr, setArr, selectedUsers,setSelectedUsers}) => {
    const [posts, setPosts] = useState([
        {id: 1, img: "", name: 'Zanjabil Bro', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 2, img: "", name: 'Baron TJK', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 3, img: "", name: 'Corleon', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 4, img: "", name: 'Shabnami Surayo', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 5, img: "", name: 'Nigina Amonqulova', followers: '392.2 Млн', likes: '4.65 Млрд'},
    ])
    const [posts2, setPosts2] = useState([
        {id: 1, img: "", name: 'Bro', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 2, img: "", name: ' TJK', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 3, img: "", name: 'Corleon Bro', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 4, img: "", name: 'Shabnam', followers: '392.2 Млн', likes: '4.65 Млрд'},
        {id: 5, img: "", name: 'Nigina', followers: '392.2 Млн', likes: '4.65 Млрд'},
    ])
    const cnt = 10;
    const pageSize = 4;
    const [currentPage, setCurrentPage] = useState(1);
    const newArr = [...posts, ...posts2];
    // console.log(newArr);
    const handlePageChange = (pageIndex) => {
        // console.log("page:", pageIndex);
        setCurrentPage(pageIndex);
    }
    const paginate = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        return [...items].splice(startIndex, pageSize);
    }
    const userCrop= paginate(newArr, currentPage, pageSize);

    // Используем хук useEffect для включения кода из "blogger.js"
    useEffect(() => {
        const prev = document.getElementById("left"),
            next = document.getElementById("right"),
            slides = document.querySelectorAll(".carousel__elem"),
            slidesWrap = document.querySelectorAll(".carousel");

        let index = 0;
        const activeSlide = (n) => {
            slides.forEach((slide) => {
                slide.classList.remove('active');
            })
            slides[n].classList.add('active');
        }
        const nextSlide = () => {
            if (index == slides.length - 1) {
                index = 0;
                activeSlide(index);
            } else {
                ++index;
                activeSlide(index);
            }
        }

        const prevSlide = () => {
            if (index == 0) {
                index = slides.length - 1;
                activeSlide(index);
            } else {
                --index;
                activeSlide(index);
            }
        }
        next.addEventListener('click', nextSlide);
        prev.addEventListener('click', prevSlide);

        // Очистка обработчиков событий при размонтировании компонента
        return () => {
            next.removeEventListener('click', nextSlide);
            prev.removeEventListener('click', prevSlide);
        };
    }, []);

    return (
        <div className="bloggers">
            <div className="container">
                <h2 className="bloggers__title">
                    Выберите блогеров
                </h2>
                <p className="bloggers__text">
                    Отметь подходящего блогера и отправь заявку
                </p>
                <div className="wrapper">
                    <img id="left" className="firstArrow" src={FirstArrow} alt="Arrow 1"/>
                    <div className="carousel">
                        <div className="carousel__elem"> Еда </div>
                        <div className="carousel__elem"> Туризм </div>
                        <div className="carousel__elem"> Спорт </div>
                        <div className="carousel__elem"> Музыка </div>
                        <div className="carousel__elem"> Развлечения </div>
                        <div className="carousel__elem"> Красота </div>
                        <div className="carousel__elem"> Мода </div>
                        <div className="carousel__elem"> Образование </div>
                        <div className="carousel__elem"> Культура </div>
                        <div className="carousel__elem"> Технологии </div>
                        <div className="carousel__elem"> Игры </div>
                        <div className="carousel__elem"> Одежда </div>
                        <div className="carousel__elem"> Юмор </div>
                    </div>
                    <img id="right" className="secondArrow" src={SecondArrow} alt="Arrow 2"/>
                </div>
                <PostList posts = {posts} count = {count} setCount = {setCount} arr={arr} setArr={setArr} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
                <PostList posts = {posts2} count = {count} setCount = {setCount} arr={arr} setArr={setArr} selectedUsers={selectedUsers} setSelectedUsers={setSelectedUsers}/>
                <Pagination
                    itemsCount={cnt}
                    pageSize={pageSize}
                    currentPage = {currentPage}
                    onPageChange={handlePageChange}
                />
            </div>

        </div>
    );
    // console.log(game.arrowIcons);
};

export default Bloggers;