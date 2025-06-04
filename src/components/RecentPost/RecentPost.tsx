import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const RecentlyPosted = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="w-[90%] mx-auto mt-8">
      <div className="text-sm font-semibold text-white bg-[#00AAA1] px-2 py-1 w-fit rounded-t">
        Recently Posted
      </div>

      <div className="grid md:grid-cols-1 gap-6 mt-4">
        {posts.map((post: any) => (
          <div key={post.id} className="flex gap-4 items-start border-b pb-4">
            {/* Image Placeholder */}
            <div className="w-32 h-24 bg-gray-200 rounded"></div>

            {/* Post Content */}
            <div className="flex-1">
              <Link to={`/post/${post.id}`}>
                <h2 className="font-semibold text-lg text-gray-800 hover:text-[#00AAA1] transition">
                  {post.title}
                </h2>
              </Link>
              <div className="text-xs text-gray-500 my-1">By Admin | 01 Jan 2024 | Comments (0)</div>
              <p className="text-sm text-gray-600 line-clamp-2">{post.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecentlyPosted;
