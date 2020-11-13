import React, { useEffect, useState } from 'react'
import './detail-blog.scss'
import { RegisterBg } from '../../assets'
import { json } from 'body-parser';

// function to get query params. ex. useQuery().get('id');
// function useQuery() {
//     return new URLSearchParams(useLocation().search);
// }

const DetailBlog = ({blogId}) => {
    const [ blog, setBlog ] = useState({});
    const [ author, setAuthor ] = useState({})

    useEffect(() => {
        fetch(`http://localhost:3300/v1/blog/post/${blogId}`)
            .then(response => response.json())
            .then(responseJson => {
                setBlog(responseJson.data)
                setAuthor(responseJson.data.author);   
            });
    }, [blogId]);

    return (
        <div className="detail-blog">
            <img src={`http://localhost:3300/${blog.image}`} alt="thumb" className="detail-blog__thumb"/>
            <h1 className="detail-blog__title">{blog.title}</h1>
            <h2 className="detail-blog__author">{author.name} - {blog.updatedAt}</h2>
            <p className="detail-blog__content">{blog.description}</p>
        </div>
    )
}

export default DetailBlog
