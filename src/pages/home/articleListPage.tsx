import { Article } from 'capabilities/capabilities';
import BaseComponent from 'components/common/BaseComponent';
import React from 'react'

type State = {
  articles: Article[]
}

export default class ArticleListPage extends BaseComponent {

  componentDidMount() {
    super.componentDidMount()
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}