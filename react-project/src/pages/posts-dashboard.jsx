import { useEffect, useState } from "react";
import { getPosts } from "../services/post-service";

function PostsDashboard() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {

    const response = await getPosts();

    setPosts(response.data);
  };

  return (
    <>
      <h1 className="page-title">
        Posts Dashboard
      </h1>

      <div className="card-grid">

        {posts.slice(0, 20).map((post) => (
          <div
            key={post.id}
            className="dashboard-card"
          >
            <h3>{post.title}</h3>

            <p>{post.body}</p>
          </div>
        ))}

      </div>
    </>
  );
}

export default PostsDashboard;