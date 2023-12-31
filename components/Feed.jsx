"use client"

import { useEffect, useState } from "react"
import PromptCard from "./PromptCard"


const PromptCardList = ({ data, handleTagClick, notFoundText }) => {

    return (
        <div className="w-full p-5">
            <p className="text-center">{notFoundText}</p>
            <div className="flex justify-center items-center">
                {data.map((post) => <PromptCard key={post._id} post={post} handleTagClick={handleTagClick} />)}
            </div>
        </div>
    )
}
export default function Feed() {
    const [searchText, setSearchText] = useState('')
    const [posts, setPosts] = useState([])
    const [notFoundText, setNotFoundText] = useState('')
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('/api/prompt');
            const data = await response.json()
            console.log("data=", data)
            setAllPosts(data)
            setPosts(data)
        }
        fetchPosts()
    }, [])

    useEffect(() => {
        const handleSearchChange = () => {
            if (searchText.length != 0) {
                if (searchText[0] === "#") {
                    const filteredPosts = allPosts.filter(item => item.tag.includes(searchText.slice(1)))
                    setNotFoundText(`${filteredPosts.length} posts found.`)
                    setPosts(filteredPosts)
                } else if (searchText[0] === "@") {
                    const filteredPosts = allPosts.filter(item => item.creator.username.includes(searchText.slice(1)))
                    setNotFoundText(`${filteredPosts.length} posts found.`)
                    setPosts(filteredPosts)
                } else {
                    const filteredPosts = allPosts.filter(item => item.prompt.includes(searchText.toLocaleLowerCase()))
                    setNotFoundText(`${filteredPosts.length} posts found.`)
                    setPosts(filteredPosts)
                }
            } else {
                setNotFoundText('')
                setPosts(allPosts)
                return
            }
        }
        handleSearchChange()
    }, [searchText])

    const handleTagClick = (tag) => {
        console.log("tag clicked", tag)
        setSearchText(`#${tag}`)
    }
    return (
        <section>
            <form className="text-center mt-5">
                <input className="w-2/5" type="text" value={searchText} placeholder="#tag/@user/searchtext" onChange={(e) => setSearchText(e.target.value)} />
            </form>

            <PromptCardList
                data={posts}
                handleTagClick={handleTagClick}
                notFoundText={notFoundText}
            />

        </section>
    )
}
