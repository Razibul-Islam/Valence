import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const EditProfile = () => {
  const update = useLoaderData();
  const navigate = useNavigate();
  // console.log(update);

  const { register, handleSubmit, reset } = useForm();

  const onsubmit = (data) => {
    const updateUser = {
      Phone: data.phone,
      university: data.university,
      address: data.address,
      Gender: data.gender,
      Birthday: data.birthday,
      userEmail: update.userEmail,
      userName: update.userName,
      userPhoto: update.userPhoto,
    };
    // console.log(data);
    fetch("http://localhost:5000/user", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateUser),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Your profile has been updated!");
        reset();
        navigate("/profile");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="p-5 md:p-0">
      <div>
        <h2 className="text-center text-5xl font-bold select-none my-5">
          Edit Your Profile
        </h2>
      </div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="w-11/12 mx-auto">
          <div className="md:flex gap-8">
            <div className="w-full">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                // {...register("name")}
                className="mt-2 w-full text-xl input input-ghost"
                defaultValue={update.userName}
                disabled
              />
            </div>
            <div className="w-full">
              <label htmlFor="email">Email: </label>
              <input
                type="text"
                id="email"
                // {...register("email")}
                className="mt-2 w-full text-xl input input-ghost"
                defaultValue={update.userEmail}
                disabled
              />
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="w-full">
              <label htmlFor="">Phone Number: </label>
              <input
                type="number"
                {...register("phone")}
                className="mt-2 w-full text-xl input input-ghost input-bordered outline-none"
                defaultValue={update.Phone}
              />
            </div>
            <div className="w-full">
              <label htmlFor="">University: </label>
              <input
                type="text"
                {...register("university")}
                className="mt-2 w-full text-xl input input-ghost input-bordered"
                defaultValue={update.university}
              />
            </div>
          </div>
          <div className="md:flex gap-8">
            <div className="w-full">
              <label htmlFor="">Address: </label>
              <input
                type="text"
                {...register("address")}
                className="mt-2 w-full text-xl input input-ghost input-bordered"
                defaultValue={update.address}
              />
            </div>
            <div className="w-full">
              <label className="label cursor-pointer">Gender: </label>
              <div className="flex items-center gap-5">
                <span className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    {...register("gender")}
                    value="Male"
                    // checked={update.Gender === "Male"}
                    className="radio radio-warning"
                    defaultChecked={update.Gender === "Male"}
                  />{" "}
                  Male
                </span>
                <span className="flex justify-center items-center gap-2">
                  <input
                    type="radio"
                    {...register("gender")}
                    value="Female"
                    // checked={update.Gender === "Female"}
                    className="radio radio-warning"
                    defaultChecked={update.Gender === "Female"}
                  />{" "}
                  Female
                </span>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="datepicker relative form-floating mb-3 xl:w-96">
              <label htmlFor="floatingInput" class="text-gray-700">
                Date of Birth
              </label>
              <input
                type="date"
                defaultValue={update.Birthday}
                class="mt-2 w-full text-xl input"
                placeholder="Select a date"
                {...register("birthday")}
              />
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            <button className="bg-[#c4c4c4] px-4 py-3 text-2xl text-white rounded-md">
              Cancel
            </button>
            <button className="bg-blue-800 px-4 py-3 text-2xl text-white rounded-md">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
