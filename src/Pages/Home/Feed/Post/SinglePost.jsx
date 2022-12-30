import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";

const SinglePost = () => {
  const post = useLoaderData();
//   console.log(post);
  const postId = post._id;
  //   fetch(`http://localhost:5000/comments/${postId}`)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));

  const { data: comments = [], isLoading } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments/${postId}`);
      const data = await res.json();
      return data;
    },
  });
//   console.log(comments);
  if (isLoading) {
    return <div>ddd</div>;
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-start">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={post.image}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <div>
            <div className="avatar">
              <div className="w-24 rounded-full">
                <img src={post.user.photoURL} alt="" />
              </div>
            </div>
            <p className="font-semibold text-lg">{post.user.displayName}</p>
            {comments.map((comment) => (
              <p key={comment._id}>{comment.comment}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePost;
