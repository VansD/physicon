import emptyImg from "../../assets/images/empty.svg"
import styles from "../../assets/styles/articles/emptyArticles.module.scss"

export const EmptyArticles: React.FC = () => {
    return <div className={styles.container}>
        <div className={styles.content}>
            <img src={emptyImg}/>
        </div>
    </div>
}