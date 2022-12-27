import React from "react";

const LogIn = () => {
  return (
    <>
      <input type="checkbox" id="login" className="modal-toggle" />
      <label htmlFor="login" className="modal cursor-auto">
        <div className="modal-bottom sm:modal-middle">
          <div className="modal-box relative">
            <label
              htmlFor="login"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <div>
              
            </div>
            <div className="modal-action">
              <label className="btn btn-secondary">Log In</label>
            </div>
          </div>
        </div>
      </label>
    </>
  );
};

export default LogIn;
