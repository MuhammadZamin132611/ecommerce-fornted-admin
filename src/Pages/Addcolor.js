import React from 'react';
import CustomInput from '../components/CustomInput';


const Addcolor = () => {

    return (
        <div>
            <h3 className="mb-4 title">Add Color</h3>

            <div className=''>
                <form action="">
                    <div className='mt-4'>
                        <CustomInput type='color' label='Enter Color' />
                    </div>
                    <button type='submit' className='btn btn-success border-o rounded-3 my-5'>Add Color</button>
                </form>
            </div>
        </div>
    );
}

export default Addcolor;
