import { useQuery, gql } from "@apollo/client";
import Link from "next/link";

const GET_POSTS = gql`
  query getPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          id
          databaseId
          title
          slug
        }
      }
    }
  }
`;

const BATCH_SIZE = 5;

export default function LoadMorePost() {
  const { data, loading, error, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: BATCH_SIZE, after: null },
    notifyOnNetworkStatusChange: true,
  });

  if (error) {
    return <p>Sorry, an error happened. Reload Please</p>;
  }

  if (!data && loading) {
    return <p>Loading...</p>;
  }

  if (!data?.posts.edges.length) {
    return <p>no posts have been published</p>;
  }

  const posts = data.posts.edges.map((edge) => edge.node);
  const haveMorePosts = Boolean(data?.posts?.pageInfo?.hasNextPage);

  return (
    <>
      <ul style={{ padding: "0" }}>
        {posts.map((post) => {
          const { databaseId, title, slug } = post;
          return (
            <li
              key={databaseId}
              style={{
                border: "2px solid #ededed",
                borderRadius: "10px",
                padding: "2rem",
                listStyle: "none",
                marginBottom: "1rem",
              }}
            >
              <Link href={`/blog/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
      {haveMorePosts ? (
        <form
          method="post"
          onSubmit={(event) => {
            event.preventDefault();
            fetchMore({ variables: { after: data.posts.pageInfo.endCursor } });
          }}
        >
          <button type="submit" disabled={loading}>
            {loading ? "Loading..." : "Load more"}
          </button>
        </form>
      ) : (
        <p>✅ All posts loaded.</p>
      )}
    </>
  );
}