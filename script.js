import { OpenAI } from 'openai';

export default async function handler(req, res) {
    try {
        // 1. Initialize OpenAI
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        // 2. Process request
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: req.body.message
            }],
            temperature: 0.7,
            max_tokens: 250
        });

        // 3. Return response
        res.status(200).json({
            reply: completion.choices[0].message.content
        });

    } catch (error) {
        // 4. Error handling
        console.error('API Error:', error);
        res.status(500).json({
            reply: "I'm experiencing technical difficulties. Please try again later."
        });
    }
}
