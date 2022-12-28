import React, { useState } from "react";
import Logine from "./Logine";
import Register from "./Register";

const LogIn = () => {
  const [isModal, setIsModal] = useState(true);
  return (
    <>
      <div>
        <input type="checkbox" id="login" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box text-gray-700 relative">
            {/* max-h-[95%] max-w-5xl */}
            <label
              htmlFor="login"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              // onClick={() => setIsModal(true)}
            >
              ✕
            </label>
            {/*  */}
            {isModal && (
              <>
                <Logine setIsModal={setIsModal} isModal={isModal} />
              </>
            )}
            {/*  */}
            {!isModal && (
              <>
                <Register setIsModal={setIsModal} isModal={isModal} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LogIn;
