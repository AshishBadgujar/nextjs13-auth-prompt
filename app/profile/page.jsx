"use client"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import Profile from "@components/Profile"

export default function page() {
    const { data: session } = useSession()
    const router = useRouter()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch(`/api/users/${session?.user.id}/posts`);
            const data = await response.json()
            setPosts(data)
        }
        if (session?.user.id) fetchPosts()
    }, [session])

    const handleEdit = (postId) => {
        console.log("post=", postId)
        router.push(`/update-prompt?id=${postId}`)
    }
    const handleDelete = async (postId) => {
        const hasConfirmed = confirm("Are you sure want to delete?")
        if (hasConfirmed) {
            try {
                await fetch(`/api/prompt/${postId.toString()}`, {
                    method: 'DELETE'
                });
                const filteredPosts = posts.filter((item) => item._id != postId)
                setPosts(filteredPosts)
            } catch (error) {

            }
        }
    }
    return (
        <Profile
            name="My"
            desc="Welcome to your profile"
            data={posts}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
        />
    )
}
