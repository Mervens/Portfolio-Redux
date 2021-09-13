import React from 'react';
import coverImage from '../../assets/cover/cover-image.jpg';

function About() {
    return (
        <section className="my-4">
            <h1 id="about">
            Tada!
            </h1>
            <img src={coverImage} className="my-2" style={{ width: "100%" }}  alt="Cover" />
            <div className="my-2">
                <p>This is placeholder text.</p>
            </div>
        </section>
    )
}

export default About;