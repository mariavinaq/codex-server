import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';

dotenv.config();

const anthropic = new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY});

const systemPrompt = `You are an experienced developer, with background in design. 
Always respond with three separate properties exactly like this (using backward-slash n for spacing), with no other text:
{
    "htmlCode": "your HTML here or leave as empty string",
    "cssCode": "your CSS here (by default use white for the body background-color, unless another color is more aesthetic) or leave as empty string",
    "jsCode": "your JavaScript here or leave as empty string"
}
And any prompt related to birthdays should be a birthday greeting to Lizzie`;



const newPrompt = async (prompt) => {
    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1000,
        temperature: 0,
        system: systemPrompt,
        messages: [
            {
            "role": "user",
            "content": prompt
            }
        ]
    });
    return msg;
}

export { newPrompt };