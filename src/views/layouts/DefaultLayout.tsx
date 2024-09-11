import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

import styles from "../../assets/styles/layouts/layout.module.scss"
import React from "react"

export const DefaultLayout: React.FC = () => {
    return <React.Fragment>
        <Header />
        <main className={styles.main}>
            <Outlet />
        </main>
        <Footer />
    </React.Fragment>
}