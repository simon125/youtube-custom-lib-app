import React from 'react'

const PaginationNav = ({ length, filmsPerPage, onNumOfPageClick, onPreviousClick, onNextClick }) => {



    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(length / filmsPerPage); i++) {
        pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map(number => {
        return (
            <li key={number} className="page-item">
                <button
                    className="nav-btn page-link"
                    id={number}
                    onClick={onNumOfPageClick}
                >
                    {number}
                </button>
            </li>
        );
    });




    return (
        <nav className="d-flex justify-content-center align-items-center mt-4 pt-3 bg-light">
            <ul className="pagination">
                <li className="page-item"><button onClick={onPreviousClick} className="nav-btn page-link" >Previous</button></li>
                {
                    renderPageNumbers
                }
                <li className="page-item"><button onClick={onNextClick} className="nav-btn page-link" >Next</button></li>
            </ul>
        </nav>
    )
}

export default PaginationNav