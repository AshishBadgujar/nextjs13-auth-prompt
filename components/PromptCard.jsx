"use client"

import { useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

export default function PromptCard({ post, handleTagClick, handleEdit, handleDelete }) {
    const { data: session } = useSession()
    const pathName = usePathname()

    return (
        <div
            class="max-w-[26rem] flex-col mx-5 px-5">
            <div
                class="flex items-center gap-4 pb-6 mt-4">
                <Image src={post.creator.image} width={50}
                    height={50}
                    class=" rounded-full " alt="user-img" />

                <div class="flex w-full flex-col gap-0.5">
                    <div class="flex items-center justify-between">
                        <h5
                            class="text-xl font-semibold">
                            {post.creator.username}
                        </h5>
                    </div>
                    <p class="font-light">
                        {post.creator.email}
                    </p>
                </div>
            </div>
            <div class="p-0 mb-6">
                <p class="font-light">
                    {post.prompt}
                </p>
                <p className="mt-2" onClick={() => handleTagClick(post.tag)}>#{post.tag}</p>
            </div>

            {session?.user.id === post.creator._id && pathName === "/profile" && (
                <div>
                    <Link href={`/update-prompt?id=${post._id}`} className="outline_btn" onClick={() => handleEdit(post._id)}>Edit</Link>
                    <button className="ml-5" onClick={() => handleDelete(post._id)}>Delete</button>
                </div>
            )}
        </div>
    )
}
