import { useEffect, useState } from "react";
import axios from 'axios';
import Post from "../Post/Post";
import style from './PostsList.module.css'

export default function PostsList() {
    const [posts, setPosts] = useState([])
    
    const retrievePosts = async () => {
        axios.get('http://localhost:8080/posts/findAll')
            .then(res=>{
                setPosts(res.data)
                console.log(res.data)
            })
            .catch(err=>alert(err))
    }

    useEffect(()=>{
        retrievePosts()
    }, [])

    return (
        <div className={style.postsContainer}>
            {
                posts.map((value, index)=>(
                    <Post data={value} key={index}/>
                ))
            }
        </div>
    )
}