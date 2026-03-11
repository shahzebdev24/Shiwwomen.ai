import React from 'react';
import './FeaturedBlogs.css';
import understandingImg from '../../assets/understanding.jpg';
import understanding1Img from '../../assets/understanding1.jpg';
import understanding2Img from '../../assets/understanding2.jpg';
import profileImg from '../../assets/profile.jpg';

const blogs = [
    {
        id: 1,
        title: 'Understanding Basic Fiqh for Everyday Life',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: understandingImg,
        tags: ['Well-Being', 'Mental Health', 'Well-Being']
    },
    {
        id: 2,
        title: 'Understanding Basic Fiqh for Everyday Life',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: understanding1Img,
        tags: ['Well-Being', 'Mental Health', 'Well-Being']
    },
    {
        id: 3,
        title: 'Understanding Basic Fiqh for Everyday Life',
        description: 'Compassionate, faith-aware mental health support for women.',
        image: understanding2Img,
        tags: ['Well-Being', 'Mental Health', 'Well-Being']
    }
];

const FeaturedBlogs = () => {
    return (
        <section className="featured-blogs-section">
            <span className="blogs-label">Blogs & Articles</span>
            <h2 className="blogs-title">Our Featured Blogs & Articles</h2>
            <p className="blogs-subtitle">
                Explore expert-backed articles covering early learning, reading habits, parenting tips, and creative activities for kids.
            </p>

            <div className="blogs-grid">
                {blogs.map((blog) => (
                    <div key={blog.id} className="blog-card">
                        <div className="blog-image-wrapper">
                            <img src={blog.image} alt={blog.title} />
                            <div className="blog-avatar">
                                <img src={profileImg} alt="Author" />
                            </div>
                        </div>
                        <h3 className="blog-card-title">{blog.title}</h3>
                        <p className="blog-card-desc">{blog.description}</p>
                        <div className="blog-tags">
                            {blog.tags.map((tag, index) => (
                                <span key={index} className="blog-tag">{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedBlogs;
