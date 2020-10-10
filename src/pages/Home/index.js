import React from 'react'
import './home.scss'
import { BlogItem, Button } from '../../components'
import { useHistory } from 'react-router-dom'

const Home = () => {
    //react hooks
    const history = useHistory();

    return (
        <div className="home-page">
            <div className="home-page__button">
                <Button title="create blog" onClick={() => history.push('/create-blog')}/>
            </div>
            <div className="home-page__content">
                <BlogItem />
                <BlogItem />
                <BlogItem />
                <BlogItem />
            </div>
            <div className="home-page__pagination">
                <Button title="Previos" />
                <Button title="Next" />
            </div>
        </div>
    )
}

export default Home
