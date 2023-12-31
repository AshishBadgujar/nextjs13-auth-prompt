"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { useState } from "react"

export default function PromptCard({ post, handleTagClick, handleEdit, handleDelete }) {
    const { data: session } = useSession()
    const pathName = usePathname()
    const [copied, setCopied] = useState("")

    const handleCopy = () => {
        setCopied(post.prompt)
        navigator.clipboard.writeText(post.prompt)
        setTimeout(() => setCopied(''), 3000)
    }
    return (
        <div>
            <div>
                <Image src={post.creator.image} width={40} height={40} alt="user-img" />
                <h4>{post.creator.username}</h4>
                <p>{post.creator.email}</p>
            </div>

            <div onClick={() => handleCopy()}>
                <p>{copied === post.prompt ? "copied" : "copy"}</p>
            </div>

            <div>
                <p>{post.prompt}</p>
                <p onClick={() => handleTagClick(post.tag)}>#{post.tag}</p>
            </div>
            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div>
                    <button onClick={() => handleEdit(post._id)}>Edit</button>
                    <button onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
