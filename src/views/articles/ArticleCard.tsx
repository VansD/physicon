import React from 'react';
import styles from "../../assets/styles/articles/articleCard.module.scss"
import { formatDate } from '../../utils/date';
import viewedImg from "../../assets/images/viewed.svg"
import { Article } from '../../interfaces/article';

interface ArticleProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleProps> = ({ article }) => {
  return (
    <a className={styles.card}>
      <img src={"https://oblakoz.ru/" + article.coverSrc} alt={article.title} className={styles.image} />
      <div className={styles.content}>
        <div className={styles.info}>
          <span>Статьи • {formatDate(article.date)}</span>
          <span className={styles.info_viewed}><img src={viewedImg} />&nbsp;&nbsp;{article.views}</span>
        </div>
        <div className={styles.info_title}>{article.title}</div>
      </div>
    </a>
  );
};

export default ArticleCard;
