import React, { useEffect, useState } from 'react';
import ArticleCard from './ArticleCard';
import articlesData from "../../articles.json";
import styles from "../../assets/styles/articles/articlePage.module.scss";
import { ArticleFilters } from './ArticleFilters';
import { Article } from '../../interfaces/article';
import { observer } from 'mobx-react-lite';
import articleStore from '../../stores/articleStore';
import rubricStore from '../../stores/rubricStore';
import { EmptyArticles } from './EmptyArticles';


interface ArticlesPageProps {
  filter: string;
}

const ArticlesPage: React.FC<ArticlesPageProps> = observer(() => {

  const { articles, setArticles } = articleStore;
  const { activeRubrics } = rubricStore;

  useEffect(() => {
    fetch("https://oblakoz.ru/_next/data/FP2fpEsz_SVEwoLoYME61/articles.json", {
      "headers": {
        "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
        "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
        "cache-control": "no-cache",
        "pragma": "no-cache",
        "priority": "u=0, i",
        "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "document",
        "sec-fetch-mode": "navigate",
        "sec-fetch-site": "none",
        "sec-fetch-user": "?1",
        "upgrade-insecure-requests": "1"
      },
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": null,
      "method": "GET",
      "mode": "cors",
      "credentials": "include"
    }).then(response => response.json())
      .then(data => {
        setArticles(data.articles)
        document.title = data.pageProps.metaData.title;
      });


      

    // let activeArticles = activeRubrics.length > 0
    //   ? articlesData.pageProps.articles.filter(article => activeRubrics.includes(article.rubricId))
    //   : articlesData.pageProps.articles;

    // document.title = articlesData.pageProps.metaData.title;

    // setArticles(activeArticles)
  }, [activeRubrics.length]);

  if (articles.length === 0)
    return <EmptyArticles />

  return (<React.Fragment>
    <ArticleFilters />
    <div className={styles.container}>
      <div className={styles.list}>
        {articles.map(article => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  </React.Fragment>
  );
});

export default ArticlesPage;
