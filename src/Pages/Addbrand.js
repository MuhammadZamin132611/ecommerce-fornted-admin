import React from 'react';
import CustomInput from '../components/CustomInput';


const Addbrand = () => {

    return (
        <div>
            <h3 className="mb-4 title">Add Brand</h3>

            <div className=''>
                <form action="">
                    <div className='mt-4'>
                        <CustomInput type='text' label='Enter Brand' />
                    </div>
                    <button type='submit' className='btn btn-success border-o rounded-3 my-5'>Add Brand</button>
                </form>
            </div>
        </div>
    );
}

export default Addbrand;
