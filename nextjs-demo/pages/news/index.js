import Link from "next/link";

function NewsPage(props) {
  return (
    <>
      <h1>The news page</h1>
      <ul>
        <li>
          <Link href="/news/first-article">News 1</Link>
        </li>
        <li>
          <Link href="/news/second-article">News 2</Link>
        </li>
        <li>
          <a href="/news/third-article">Third article</a>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
