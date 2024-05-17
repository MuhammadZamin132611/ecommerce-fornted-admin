import React from 'react';
import CustomInput from '../components/CustomInput';


const Addcat = () => {

    return (
        <div>
            <h3 className="mb-4 title">Add Category</h3>

            <div className=''>
                <form action="">
                    <div className='mt-4'>
                        <CustomInput type='text' label='Enter Category' />
                    </div>
                    <button type='submit' className='btn btn-success border-o rounded-3 my-5'>Add Category</button>
                </form>
            </div>
        </div>
    );
}

export default Addcat;
