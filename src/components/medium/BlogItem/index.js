import React from 'react'
import './blog-item.scss'
import { Button } from '../../small'
import { useHistory } from 'react-router-dom'

const BlogItem = ({image,title,description,date, authorName}) => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img src={image} alt="post" className="blog-item__thumb"/>
            <div className="blog-item__content">
                <h2 className="content__title">{title}</h2>
                <h3 className="content__author">{authorName} - {date}</h3>
                <p className="content__body">{description}</p>
                <div className="content__button">
                    <Button title="Detail" onClick={() => history.push('/detail-blog')}/>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
