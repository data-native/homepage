import {useParams} from 'react-router-dom';

const article = {
  title: "best article",
  subtitle: "subtitle for the best article"
}

export function ArticleDetail() {
  const params = useParams();

  return (
    <div class="header">
      <h1> {article.title}</h1>
      <h2> {article.subtitle}</h2>
      <p>{params.postId}</p>
    </div>
    
  )
}
