import { OpenAI } from 'openai';

export default async function handler(req, res) {
    try {
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });

        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: req.body.message
            }],
            temperature: 0.7,
            max_tokens: 150
        });

        res.status(200).json({ reply: completion.choices[0].message.content });
        
    } catch (error) {
        console.error('API Error:', error);
        res.status(500).json({ reply: "Service unavailable. Try again later." });
    }
}
