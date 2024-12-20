import axios from 'axios';
import './BlogsPage.css'
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const BlogsPage = () => {
    const id = useParams().id;
    const [Blog, setBlog] = useState();
    useEffect(() => {
        const fetch = async () => {
            await axios.get(`http://localhost:1000/api/v1/getBlog/${id}`).then((res) => setBlog(res.data.data));
        };
        fetch();
    }, [id]);

    return (
        <div className='page container'>
            <div className='my-3'>
                {Blog &&
                    <>
                        <h1 className='mt-5'>{Blog.title}</h1>
                        <p className='blogpage mt-3'>{Blog.desc}</p>
                    </>}

            </div>
        </div>
    );
}

export default BlogsPage;
