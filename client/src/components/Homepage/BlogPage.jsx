import React, { useEffect, useState } from 'react';
import { getBlogByID } from '../../services/apiManage.service.js';

async function BlogPage() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      const data = await getBlogByID(93); // Replace 'some-blog-id' with the actual blog ID
      setBlogData(data);
    };

    fetchBlogData();
  }, []);

  return (
    <div>
      {blogData ? (
        <div>
          <h1>{blogData.title}</h1>
          <p>{blogData.content}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default BlogPage;