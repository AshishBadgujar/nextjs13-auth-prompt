"use client"

import PromptCard from "./PromptCard"

export default function Profile({ name, desc, data, handleEdit, handleDelete }) {
    return (
        <section>
            <h1>{name} Profile</h1>
            <p>{desc}</p>
            <div>
                {data.map((post) => <PromptCard key={post._id} post={post} handleEdit={handleEdit} handleDelete={handleDelete} />)}
            </div>
        </section>
    )
}
