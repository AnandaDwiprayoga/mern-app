import React from 'react'
import './blog-item.scss'
import { RegisterBg } from "./../../../assets"
import { Button } from '../../small'
import { useHistory } from 'react-router-dom'

const BlogItem = () => {
    const history = useHistory();

    return (
        <div className="blog-item">
            <img src={RegisterBg} alt="post" className="blog-item__thumb"/>
            <div className="blog-item__content">
                <h2 className="content__title">Title Blog</h2>
                <h3 className="content__author">Author - Date post</h3>
                <p className="content__body">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae quasi eaque itaque! Dignissimos in qui, rerum eum delectus libero! Magnam esse vero sequi aperiam facere beatae eos hic, corporis debitis.</p>
                <div className="content__button">
                    <Button title="Detail" onClick={() => history.push('/detail-blog')}/>
                </div>
            </div>
        </div>
    )
}

export default BlogItem
