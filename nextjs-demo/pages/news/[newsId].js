import { route } from "next/dist/server/router";
import { useRouter } from "next/router";

// domain.com/news/[newsId]
function Detail(props) {
  const router = useRouter();

  const newsId = router.query.newsId;

  return <h1>/news/detail page</h1>;
}

export default Detail;
