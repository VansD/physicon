import styles from "../../assets/styles/layouts/footer.module.scss"
import footerLogo from "../../assets/images/logo_mono.svg"

export const Footer: React.FC = () => {
    return <footer>
        <div className={styles.container}>
            <span>
                <img src={footerLogo}/>
            </span>
        </div>
    </footer>
}