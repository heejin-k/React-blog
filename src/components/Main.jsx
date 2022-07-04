import React from 'react'
import About from './About'
import Post from './Post'

function Main() {
    return (
        <main>
            <div className="max-width">
                <h2 className="a11y-hidden">Post</h2>
                <ul className="posts">
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                    <Post />
                </ul>
                <About />
            </div>
        </main>
    )
}

export default Main