import React from 'react'
import NavButton from './NavButton';

const Pagination = ({postsPerPage, totalPosts, paginate}) => {

    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul className="breadcrumb">
                {pageNumbers.map((number) => (
                    <li key={number} className='page-item'>
                    <NavButton number={number} onClick={() => paginate(number)}>
                    </NavButton>
                  </li>
                ))}
            </ul>
        </div>
    )
}

export default Pagination
