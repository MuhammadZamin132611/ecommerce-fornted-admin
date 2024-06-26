import React from 'react';
import CustomInput from '../components/CustomInput';

const Forgotpassword = () => {
  return (
    <>
      <div className='py-5' style={{ "background": "#ffd333", minHeight: "100vh" }}>
        <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4 shadow'>
          <h3 className='text-center '>Forgot Password</h3>
          <p className='text-center'>Please Enterd your registerd email to get reset password mail.</p>
          <form action="">
            <CustomInput type='text' label='Email Address' id='email' />
            <button className='border-0 px-3 py-2 text-white fw-bold w-100' type='submit' style={{ "background": "#ffd333" }}>Send Link</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Forgotpassword;
