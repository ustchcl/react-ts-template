import { Article } from 'capabilities/capabilities';
import {
  ARTICLE_PAGE_LOADED,
  ARTICLE_PAGE_UNLOADED,
  SET_PAGE
} from 'constants/actionTypes'


type ActicleListState = {
  page: number;
  articles: Article[];
  total: number;
}

const defaultState: ActicleListState = {
  page: 0,
  articles: [],
  total: 0,
}

type ArticleListAction = {
  type: 'ARTICLE_PAGE_LOADED' | 'ARTICLE_PAGE_UNLOADED' | 'SET_PAGE';
  payload: { articles: Article[], total: number };
  page: number;
}

const reducer = (state = defaultState, action: ArticleListAction) => {
  const {type, payload, page} = action
  switch (type) {
    case  ARTICLE_PAGE_LOADED: {
      return {
        ...state,
        page: page,
        acticles: payload.articles,
        total: payload.total,
      }
    }
    case ARTICLE_PAGE_UNLOADED: {
      return defaultState
    }
    case SET_PAGE: {
      return {
        page: page,
        articles: payload.articles,
        total: payload.total
      }
    }
  }
}

export default reducer