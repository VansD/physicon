
import { makeAutoObservable } from "mobx"
import { Article } from "../interfaces/article";

class ArticleStore {
    articles: Article[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setArticles = (articles: Article[]) => {
        this.articles = articles;
    }
}

export default new ArticleStore;