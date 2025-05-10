
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY });
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { input, idea } = req.body;
  const prompt = `You are a helpful AI startup assistant. The business idea is: "${idea}". User says: "${input}". How do you respond?`;

  const completion = await openai.createChatCompletion({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: prompt }],
  });

  const reply = completion.data.choices[0].message?.content;
  res.status(200).json({ reply });
}
