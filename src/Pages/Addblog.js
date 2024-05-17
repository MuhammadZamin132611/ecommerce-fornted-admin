import React, { useState } from 'react';
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { InboxOutlined } from '@ant-design/icons';
// import { UploadProps } from 'antd';
import { message, Upload } from 'antd';
const { Dragger } = Upload;

const props = {
    name: 'file',
    multiple: true,
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const Addblog = () => {
    const [desc, setDesc] = useState();
    const handelDesc = (e) => {
        setDesc(e);
    }
    return (
        <div>
            <h3 className="mb-4 title">Add Blog</h3>

            <div className=''>
                <form action="">
                    <Dragger {...props}>
                        <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                        </p>
                        <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        <p className="ant-upload-hint">
                            Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                            banned files.
                        </p>
                    </Dragger>
                    <div className='mt-4'>
                        <CustomInput type='text' label='Enter Blog Title' />
                    </div>
                    <select name="" className='form-control py-3 mb-3' id="">
                        <option value="">Select Blog Category</option>
                    </select>

                    <ReactQuill theme="snow" value={desc} onChange={(evt) => { handelDesc(evt) }} />
                    <button type='submit' className='btn btn-success border-o rounded-3 my-5'>Add Blogs</button>
                </form>
            </div>
        </div>
    );
}

export default Addblog;