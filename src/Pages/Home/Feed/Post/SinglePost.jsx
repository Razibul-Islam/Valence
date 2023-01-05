import { useQuery } from "@tanstack/react-query";
import React, { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineLeft } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { GoComment } from "react-icons/go";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const SinglePost = () => {
  const { user } = useContext(AuthContext);
  const post = useLoaderData();

  const postId = post._id;

  const [postId2, setPostId2] = useState(post.likeCount);
  const [liked, setLiked] = useState(false);

  const {
    data: comments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/comments/${postId}`);
      const data = await res.json();
      return data;
    },
  });

  const getComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const field = form.comment.value;
    const data = {
      comment: field,
      postId: post._id,
      postUser: user,
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          toast.success("Comment Done!");
          form.reset();
          refetch();
        }
      })
      .catch((err) => console.error(err));
  };

  const handleLikeClick = async () => {
    if (!liked) {
      const response = await fetch(`http://localhost:5000/like/${postId}`, {
        method: "POST",
      });
      // console.log(response);

      if (response.ok) {
        setPostId2(post.likeCount + 1);
        refetch();
        setLiked(!liked);
      }
    } else {
      const response = await fetch(`http://localhost:5000/dislike/${postId}`, {
        method: "POST",
      });
      // console.log(response);

      if (response.ok) {
        setPostId2(post.likeCount - 1);
        refetch();
        setLiked(!liked);
      }
    }
  };

  if (isLoading) {
    return <div>ddd</div>;
  }
  return (
    <>
      <div className="mt-8">
        <p className="font-bold">
          <Link to="/" className="flex items-center gap-2">
            <AiOutlineLeft />
            BACK TO FEED
          </Link>
        </p>
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-start">
            {post.image && (
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                <img
                  className="object-cover object-center rounded"
                  alt="hero"
                  src={post.image}
                />
              </div>
            )}
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <div className="w-full">
                <div className="flex items-center justify-between p-3">
                  <div className="flex space-x-4">
                    <img
                      alt=""
                      src={post.user?.photoURL}
                      className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
                    />
                    <div className="flex flex-col space-y-1">
                      <a
                        rel="noopener noreferrer"
                        href="#"
                        className="text-sm font-semibold"
                      >
                        {post.user?.displayName}
                      </a>
                      <span className="text-xs text-gray-600">
                        {new Date(post.date).toLocaleString()}
                      </span>
                    </div>
                  </div>
                  <button title="Open options" type="button">
                    <BsThreeDotsVertical className="text-3xl" />
                  </button>
                </div>
                <p className="text-lg my-4 border-b border-b-gray-400/30 max-h-80 overflow-y-auto text-justify font-semibold">
                  {post.message}
                </p>

                <div className="grid grid-cols-3 w-full px-5 my-3">
                  <button onClick={handleLikeClick}>
                    Likes {liked ? postId2 : postId2}
                  </button>

                  <button className="flex flex-row justify-center items-center w-full space-x-3">
                    <GoComment className="text-3xl" />
                    <span className="font-semibold text-lg text-gray-600">
                      Comment
                    </span>
                  </button>

                  <button className="flex flex-row justify-center items-center w-full space-x-3">
                    <FiShare2 className="text-3xl" />
                    <span className="font-semibold text-lg text-gray-600">
                      Share
                    </span>
                  </button>
                </div>
                <hr />
                {/*  */}

                <div className="gap-5">
                  <form onSubmit={getComment} className="flex gap-5">
                    <input
                      type="text"
                      placeholder="Add a comment..."
                      name="comment"
                      className="w-full py-0.5 focus:outline-none border-none rounded-full px-4 bg-white/30 text-sm  text-gray-800"
                    />
                    <button className="bg-blue-800 py-3 px-4 rounded-lg text-white font-semibold text-lg">
                      Comment
                    </button>
                  </form>
                </div>

                <div className="mt-3">
                  <h3 className="font-bold text-xl cursor-pointer underline">
                    All Comments...
                  </h3>
                  <div className="mt-5 max-h-96 overflow-y-auto">
                    {comments.map((comment) => (
                      <div
                        key={comment._id}
                        className="flex items-center space-x-2"
                      >
                        <div className="flex flex-shrink-0 self-start cursor-pointer">
                          {comment.postUser?.photoURL ? (
                            <img
                              src={comment.postUser?.photoURL}
                              alt=""
                              className="h-16 w-16 object-cover rounded-full"
                            />
                          ) : (
                            <FaUserCircle className="text-6xl" />
                          )}
                        </div>

                        <div className="flex items-center justify-center space-x-2">
                          <div className="block">
                            <div className="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                              <div className="font-medium">
                                <a
                                  href="#"
                                  className="hover:underline text-2xl"
                                >
                                  <small>
                                    {comment?.postUser?.displayName
                                      ? comment?.postUser?.displayName
                                      : "unknown"}
                                  </small>
                                </a>
                              </div>
                              <div className="text-md">{comment.comment}</div>
                            </div>
                            <div className="flex justify-start items-center text-lg w-full">
                              <div className="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                <a href="#" className="hover:underline">
                                  <small>Like</small>
                                </a>
                                <small className="self-center">.</small>
                                <a href="#" className="hover:underline">
                                  <small>Reply</small>
                                </a>
                                <small className="self-center">.</small>
                                <a href="#" className="hover:underline">
                                  <small>15 hour</small>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
                          <a href="#" className="">
                            <div className="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
                              <svg
                                className="w-4 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>
                            </div>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default SinglePost;
