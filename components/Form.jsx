import Link from "next/link";

export default function Form({ type, post, setPost, submitting, handleSubmit }) {
    return (
        <section >
            <h1><span>{type} Post</span> </h1>
            <p>{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.</p>

            <form
                onSubmit={handleSubmit}

            >
                <label>
                    <span>
                        Your AI Prompt
                    </span>

                    <textarea
                        value={post.prompt}
                        onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                        placeholder='Write your post here'
                        required

                    />
                </label>
                <br />
                <label>
                    <span>
                        Field of Prompt{" "}
                        <span>
                            (#product, #webdevelopment, #idea, etc.)
                        </span>
                    </span>
                    <input
                        value={post.tag}
                        onChange={(e) => setPost({ ...post, tag: e.target.value })}
                        type='text'
                        placeholder='Tag'
                        required

                    />
                </label>

                <div>
                    <Link href='/'>
                        Cancel
                    </Link>

                    <button
                        type='submit'
                        disabled={submitting}

                    >
                        {submitting ? `${type}ing...` : type}
                    </button>
                </div>
            </form>

        </section>
    )
}
