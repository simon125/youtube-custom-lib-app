import React from 'react'

const PaginationNav = ({ numberOfPageToRender, onNumOfPageClick, onPreviousClick, onNextClick }) => {



    const arrOfLI = []
    for (let i = 0; i < numberOfPageToRender; i++) {
        arrOfLI[i] = i
    }

    return (
        <nav className="d-flex justify-content-center align-items-center mt-4 pt-3 bg-light">
            <ul className="pagination">
                <li className="page-item"><button onClick={onPreviousClick} className="nav-btn page-link" >Previous</button></li>
                {
                    arrOfLI.map((el, i) => <li key={i} className="page-item"><button onClick={() => onNumOfPageClick(i + 1)} className="nav-btn page-link" >{i + 1}</button></li>)
                }
                <li className="page-item"><button onClick={onNextClick} className="nav-btn page-link" >Next</button></li>
            </ul>
        </nav>
    )
}

export default PaginationNav