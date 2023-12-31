import Link from "next/link";

export default function Form({ type, post, setPost, submitting, handleSubmit }) {
    return (
        <section class="mx-auto max-w-screen-xl px-4 py-16 ">
            <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div class="col-span-2 ">
                    <h1><span>{type} Post</span> </h1>
                    <p className="mt-10">{type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.</p>
                </div>

                <div class="col-span-3 px-12 py-8">
                    <form class="space-y-4" onSubmit={handleSubmit}>
                        <div>

                            <textarea
                                value={post.prompt}
                                onChange={(e) => setPost({ ...post, prompt: e.target.value })}
                                placeholder='Write Your AI Prompt'
                                required
                                rows="8"
                                id="message"
                            />
                        </div>
                        <div>
                            <label class="sr-only" for="name"> </label>
                            <input
                                value={post.tag}
                                onChange={(e) => setPost({ ...post, tag: e.target.value })}
                                type='text'
                                placeholder='Field of Prompt (#product, #webdevelopment, #idea, etc.)'
                                required
                            />
                        </div>
                        <div class="mt-4">
                            <Link href='/' className="outline_btn mr-5" >
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
                </div>
            </div>
        </section>


    )
}
