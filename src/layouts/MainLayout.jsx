import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import SearchModal from '../components/SearchModal'

export default function MainLayout() {
    return (
        <>
            <Header />
            <SearchModal />
            <Outlet />
            <Footer />
        </>
    )
}
