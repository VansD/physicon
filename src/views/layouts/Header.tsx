import styles from "../../assets/styles/layouts/header.module.scss"
import logo from "../../assets/images/logo_with_title_without_padding.svg"
import React, { useCallback, useEffect } from "react";

export const Header: React.FC = () => {
    
    const headerRef = React.useRef<HTMLHeadElement>(null);
    const handleScroll = useCallback(() => {
        let scrollTop = window.scrollY;
        scrollTop > 0 
            ? headerRef.current?.classList.replace(styles.header, styles.header_scrolled)
            : headerRef.current?.classList.replace(styles.header_scrolled, styles.header);
    }, [])

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll, false);
        };
      }, []);

    return <header ref={headerRef} className={styles.header}>
        <nav className={styles.container}>
            <a className={styles.logoLink}>
                <img src={logo} srcSet={`${logo} 1x, ${logo} 2x`}
                    loading="lazy" className={styles.logo} />
            </a>
        </nav>
    </header>
}
