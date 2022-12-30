import { async } from "@firebase/util";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AiOutlineLeft, AiOutlineLike } from "react-icons/ai";
import { GoComment } from "react-icons/go";
import { FiShare2 } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";

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
                {/*  */}
                <div class="grid grid-cols-3 w-full px-5 my-3">
                  <button class="flex flex-row justify-center items-center w-full space-x-3">
                    <AiOutlineLike className="text-3xl" />
                    <span class="font-semibold text-lg text-gray-600">
                      Like
                    </span>
                  </button>
                  <button class="flex flex-row justify-center items-center w-full space-x-3">
                    <GoComment className="text-3xl" />
                    <span class="font-semibold text-lg text-gray-600">
                      Comment
                    </span>
                  </button>

                  <button class="flex flex-row justify-center items-center w-full space-x-3">
                    <FiShare2 className="text-3xl" />
                    <span class="font-semibold text-lg text-gray-600">
                      Share
                    </span>
                  </button>
                </div>
                <hr />
                {/*  */}

                <div className="flex gap-5">
                  <input
                    type="text"
                    placeholder="Add a comment..."
                    name="comment"
                    className="w-full py-0.5 focus:outline-none border-none rounded-full px-4 bg-white/30 text-sm  text-gray-800"
                  />
                  <button className="bg-blue-800 py-3 px-4 rounded-lg text-white font-semibold text-lg">
                    Comment
                  </button>
                </div>

                {/*  */}
                {/*  */}
                <div className="mt-3">
                  <h3 className="font-bold text-xl cursor-pointer underline">
                    All Comments...
                  </h3>
                  <div className="mt-5">
                    {comments.map((comment) => (
                      <div class="flex items-center space-x-2">
                        <div class="flex flex-shrink-0 self-start cursor-pointer">
                          <img
                            src="https://images.unsplash.com/photo-1609349744982-0de6526d978b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDU5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                            alt=""
                            class="h-16 w-16 object-cover rounded-full"
                          />
                        </div>

                        <div class="flex items-center justify-center space-x-2">
                          <div class="block">
                            <div class="bg-gray-100 w-auto rounded-xl px-2 pb-2">
                              <div class="font-medium">
                                <a href="#" class="hover:underline text-2xl">
                                  <small>Arkadewi</small>
                                </a>
                              </div>
                              <div class="text-md">{comment.comment}</div>
                            </div>
                            <div class="flex justify-start items-center text-lg w-full">
                              <div class="font-semibold text-gray-700 px-2 flex items-center justify-center space-x-1">
                                <a href="#" class="hover:underline">
                                  <small>Like</small>
                                </a>
                                <small class="self-center">.</small>
                                <a href="#" class="hover:underline">
                                  <small>Reply</small>
                                </a>
                                <small class="self-center">.</small>
                                <a href="#" class="hover:underline">
                                  <small>15 hour</small>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="self-stretch flex justify-center items-center transform transition-opacity duration-200 opacity-0 translate -translate-y-2 hover:opacity-100">
                          <a href="#" class="">
                            <div class="text-xs cursor-pointer flex h-6 w-6 transform transition-colors duration-200 hover:bg-gray-100 rounded-full items-center justify-center">
                              <svg
                                class="w-4 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
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
