import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Paginate({ totalPage }) {

    const { search } = useLocation();
    const searchURL = new URLSearchParams(search).get('page')


    return (
        <nav className="d-flex justify-content-center justify-content-md-end">
            <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-left" />
                    </a>
                </li>
                <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                    <a className="page-link" href="#">6</a>
                </li>
                <li className="page-item">
                    <a className="page-link page-link-arrow" href="#">
                        <i className="fa fa-caret-right" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}
