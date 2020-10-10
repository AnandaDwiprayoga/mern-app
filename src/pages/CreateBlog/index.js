import React from 'react'
import './create-blog.scss'
import { Button, Input, Textarea, Upload } from '../../components'

const CreateBlog = () => {
    return (
        <div className="create-blog">
           <h1 className="create-blog__title">Create New Blog Post</h1>
           <Input label="Post Title" />
           <Upload />
           <Textarea />
            <div className="create-blog__button">
                <Button title="Save" />
           </div>
        </div>
    )
}

export default CreateBlog
