import { useQuery } from "@tanstack/react-query";
import React from "react";
import AllPost from "./AllPost";

const ShowPost = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/posts");
      const data = await res.json();
      return data;
    },
  });

  // console.log(data);

  if (isLoading) {
    return <div>loading</div>;
  }
  return (
    <div>
      {data.map((posts) => (
        <AllPost key={posts._id} posts={posts}></AllPost>
      ))}
    </div>
  );
};

export default ShowPost;
