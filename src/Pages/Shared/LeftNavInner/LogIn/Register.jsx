import React from 'react';

const Register = ({setIsModal, isModal}) => {
    return (
        <div onClick={()=> setIsModal(!isModal)}>
            hello
        </div>
    );
};

export default Register;