import { useEffect } from "react"
import rubricStore from "../../stores/rubricStore"
import response from "../../articles.json"
import { Rubric } from "../../interfaces/rubric";
import { observer } from "mobx-react-lite";
import styles from "../../assets/styles/articles/articleFilters.module.scss";

export const ArticleFilters: React.FC = observer(() => {
    const { rubrics, setRubrics, activeRubrics, addActiveRubric, removeActiveRubric } = rubricStore;
    useEffect(() => {
        // fetch('url')
        //   .then(response => response.json())
        //   .then(data => setArticles(data));

        setRubrics(response.pageProps.rubrics as unknown as Rubric[])
    }, []);

    const handleClick = (rubricId: string) => {
        !activeRubrics.includes(rubricId)
            ? addActiveRubric(rubricId)
            : removeActiveRubric(rubricId)
    }

    return <div className={styles.container}>
        {rubrics.map(rubric =>
            <div key={rubric.id}
                className={[styles.filter, activeRubrics.includes(rubric.id) ? styles.active : ""].join(" ")} 
                onClick={() => handleClick(rubric.id)}>
                {rubric.title}
            </div>
        )}
    </div>
})