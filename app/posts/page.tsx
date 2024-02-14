import Link from "next/link";
import React from "react";
import CreatePost from "./CreatePost";
import styled from "styled-components";
async function getPosts() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/posts/records",
    {
      cache: "no-store",
    }
  );
  const data = await res.json();

  return data?.items as any[];
}

const PostsPage = async () => {
  const posts = await getPosts();
  //   console.log(posts);
  return (
    <div>
      <h1>Posts</h1>

      {posts?.map((post) => {
        return <PostItem key={post.id} post={post} />;
      })}
      <CreatePost />
    </div>
  );
};

export default PostsPage;
const PostItem = ({ post }: any) => {
  const { id, title, created } = post || {};
  return (
    <Link href={`/posts/${id}`}>
      <div>
        <br />
        <span className="title">{title}</span>&nbsp;&nbsp;
        <span>{created}</span>
      </div>
      <br />
    </Link>
  );
};
