"use client";
import styled from "styled-components";
import { useRouter } from "next//navigation";
import { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await fetch("http://127.0.0.1:8090/api/collections/posts/records", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
      }),
    });
    setTitle("");
    router.refresh();
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Button type="submit">Create Post</Button>
    </Form>
  );
};

export default CreatePost;
const Form = styled.form`
  width: 100%;
  height: 2rem;
`;
const Input = styled.input`
  width: 70%;
  height: 100%;
  text-align: center;
`;
const Button = styled.button`
  width: 30%;
  height: 100%;
`;
