import classNames from 'classnames';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export default function Paginate({ totalPage }) {

    const { search } = useLocation();
    const searchURL = new URLSearchParams(search).get('page')
    let currentPage = parseInt(searchURL || '1')
    let { pathname } = useLocation();
    const generatePath = (currentPage) => {
        let path = `${pathname}?page=${currentPage}`
        return path
    }

    const renderPaginate = () => {

        let start = currentPage - 2,
            end = currentPage + 2
        if (start < 1) {
            start = 1
            end = 5
        }

        if (end > totalPage) {
            end = totalPage
            start = end - 4
            if (start < 1) {
                start = 1
                end = 5
            }
        }

        let list = []
        for (let i = start; i <= end; i++) {
            list.push((
                <li key={i} className={classNames("page-item", { 'active': currentPage === i })}>
                    <Link className="page-link" to={generatePath(i)}>{i}</Link>
                </li>
            ))
        }
        return list
    }

    const onNextPage = (ev) => {
        ev.preventDefault()
        currentPage += 1
    }

    const onPrevPage = (ev) => {
        ev.preventDefault()
        currentPage -= 1
    }

    console.log(currentPage);


    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                    <a onClick={onPrevPage} className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-left" />
                    </a>
                </li>
                {renderPaginate()}
                <li className="page-item">
                    <a onClick={onNextPage} className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-right" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
