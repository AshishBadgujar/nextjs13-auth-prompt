import Prompt from "@models/prompt"
import { connectDB } from "@utils/database"

export const GET = async (req, { params }) => {
    try {
        await connectDB()
        const prompts = await Prompt.find({ creator: params.id }).populate('creator')
        console.log("prompts=", prompts)
        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}