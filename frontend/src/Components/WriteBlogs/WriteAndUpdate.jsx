import React, { useState } from 'react'
import "./WriteAndUpdate.css"
import axios from 'axios'

const WriteAndUpdate = () => {
    const [Blog, setBlog] = useState({ title: " ", desc: "" })
    const change = (e) =>{
        const{name , value}= e.target;
        setBlog({...Blog , [name]:value})
    }
    const submit = async() =>{
        await axios.post("http://localhost:1000/api/v1/post",Blog).then((res)=>alert(res.data.message));
        setBlog({ title: " ", desc: "" });

        
    }
    return (
        <div className='page container'>
            <h3>Write Blogs</h3>
            <div className='d-flex flex-column my-3 '>
                <input className='form-text p-3'
                    type="text"
                    name='title'
                    value={Blog.title}
                    onChange={change}
                    placeholder='Write Title Here' />

                <textarea className='form-text p-3'
                    name="desc"
                    placeholder='Write Description Here'
                    cols="30"
                    rows="8"
                    onChange={change}
                    value={Blog.desc} />

                <div className='mt-4 '>
                    <button className='px-4 py-2 add-blog-btn' onClick={submit}>Add Blog</button>
                </div>
            </div>
        </div>
    )
}

export default WriteAndUpdate
