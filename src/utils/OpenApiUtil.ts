import OpenAI from "openai";
const VITE_OPEN_API_KEY = import.meta.env.VITE_OPEN_API_KEY

const openai = new OpenAI({
  apiKey: VITE_OPEN_API_KEY,
  dangerouslyAllowBrowser : true
});

const openAIUtils = {
  async main(question : string) {
    const stream = await openai.chat.completions.create({
      model : "gpt-3.5-turbo",
      messages : [{"role": "user", "content": question}],
      temperature : 0.7
    });

    return stream;
  }
}

export default openAIUtils;
