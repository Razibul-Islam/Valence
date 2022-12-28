import React, { useContext } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { BsFillImageFill } from "react-icons/bs";
import { BiSend } from "react-icons/bi";
import { useForm } from "react-hook-form";

const PostModal = () => {
  const { user } = useContext(AuthContext);

  const { register, handleSubmit, reset } = useForm();
  const imgbb = process.env.REACT_APP_imagebbAPI;

  const submit = (data) => {
    // console.log(data);
    const image = data.image[0];
    // console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    // console.log(formData);
    const url = `https://api.imgbb.com/1/upload?key=${imgbb}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgbb) => {
          if (imgbb.success) {
            // console.log(imgbb);
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="post" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div className="flex items-center justify-between">
            <label
              htmlFor="post"
              className="btn bg-transparent hover:bg-white hover:border-white border-white btn-sm btn-circle"
            >
              <AiOutlineLeft className="text-xl text-gray-800" />
            </label>
            <div>
              <p className="font-semibold text-xl">Create post</p>
            </div>
            <div className="avatar ml-4">
              <div className="w-12 rounded-full">
                <img src={user?.photoURL} alt="" />
              </div>
            </div>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(submit)}>
              <textarea
                className="textarea textarea-bordered resize-none w-full focus:border-none"
                placeholder="Bio"
                rows="5"
                {...register("message")}
              ></textarea>
              <div className="flex justify-between items-center px-4 mt-2">
                <div>
                  <label htmlFor="image">
                    <BsFillImageFill className="text-3xl cursor-pointer text-blue-700" />
                  </label>
                  <input
                    type="file"
                    id="image"
                    className="hidden"
                    accept="image/*"
                    {...register("image")}
                  />
                </div>
                <button className="bg-blue-700 text-xl px-4 py-2 rounded-lg text-white font-semibold flex justify-center gap-2 items-center">
                  Post <BiSend />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
