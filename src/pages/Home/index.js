import React, { useState,useEffect } from 'react'
import './home.scss'
import { BlogItem, Button } from '../../components'
import { useHistory } from 'react-router-dom'

const Home = () => {
    //react hooks 
    const history = useHistory();
    const [blogs, setBlogs] = useState([]);

    
    //call once when component load, cause in array no trigger
    useEffect( () => {
       fetch('http://localhost:3300/v1/blog/posts')
         .then(response => response.json())
         .then(responseJson => {
             setBlogs(responseJson.data);
         });

    }, []); 

    return (
        <div className="home-page">
            <div className="home-page__button">
                <Button title="create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <div className="home-page__content">
                {blogs.map(blog => {
                    return (
                        <BlogItem 
                            key={blog._id}
                            id={blog._id}
                            image={`http://localhost:3300/${blog.image}`}  
                            title={blog.title}
                            description={blog.description}
                            date={blog.updatedAt}
                            authorName={blog.author.name}/>
                    );
                })}
            </div>
            <div className="home-page__pagination">
                <Button title="Previos" />
                <Button title="Next" />
            </div>
        </div>
    )
}

export default Home
