"use client"

import Image from "next/image"
import PromptCard from "./PromptCard"

export default function Profile({ user, desc, data, handleDelete }) {
    return (
        <section class="mx-auto max-w-screen-xl px-4 py-16 ">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="col-span-2 ">
                    <Image src={user?.image} className="rounded-full" alt="profile-pic" width={150} height={150} />
                    <h1>{user?.name}</h1>
                    <p className="mt-3 font-light text-xl">{user?.email}</p>
                    <p className="mt-5">{desc}</p>
                </div>
                <div class="col-span-3">
                    {data.map((post) => (
                        <>
                            <PromptCard key={post._id} post={post} handleDelete={handleDelete} />
                            <hr className="mt-5" />
                        </>
                    ))}
                </div>
            </div>
        </section>
    )
}
