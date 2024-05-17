import React from 'react';
import CustomInput from '../components/CustomInput';

const Resetpassword = () => {
  return (
    <>
      <div>
        <div className='py-5' style={{ "background": "#ffd333", minHeight: "100vh" }}>
          <div className='my-5 w-25 bg-white rounded-3 mx-auto p-4 shadow'>
            <h3 className='text-center '>Reset Password</h3>
            <p className='text-center'>Please Enterd your new password.</p>
            <form action="">
              <CustomInput type='password' label='New Password' id='pass' i_class='mb-3' />
              <CustomInput type='password' label='Confirm Password' id='confirmpass' />
              <button className='border-0 px-3 py-2 text-white fw-bold w-100' type='submit' style={{ "background": "#ffd333" }}>Reset Password</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Resetpassword;
