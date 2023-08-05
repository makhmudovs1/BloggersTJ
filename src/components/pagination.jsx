import React from 'react';
import "../styles/pagination.css";
const Pagination = ({itemsCount, pageSize, onPageChange, currentPage}) => {
    const pageCount = Math.ceil(itemsCount / pageSize);
    if (pageCount === 1)
        return null;
    const pages = [];
    for (let i = 1; i <= pageCount; ++i) {
        pages.push(i);
    }
    return <nav>
        <ul className="pagination">
            {pages.map((page) =>
                <li className={'page-item' + (page ===currentPage? " active": "") } key={"page_"+page}><a onClick={() => onPageChange(page)} className="page-link"> {page} </a></li>
            )}
        </ul>
    </nav>
};

export default Pagination;