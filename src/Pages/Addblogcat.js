import React from 'react';
import CustomInput from '../components/CustomInput';


const Addblogcat = () => {

    return (
        <div>
            <h3 className="mb-4 title">Add Blog Category</h3>

            <div className=''>
                <form action="">
                    <div className='mt-4'>
                        <CustomInput type='text' label='Enter Blog Category' />
                    </div>
                    <button type='submit' className='btn btn-success border-o rounded-3 my-5'>Add Blog Category</button>
                </form>
            </div>
        </div>
    );
}

export default Addblogcat;
