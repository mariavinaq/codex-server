import Anthropic from "@anthropic-ai/sdk";
import dotenv from 'dotenv';

dotenv.config();

const anthropic = new Anthropic({apiKey: process.env.ANTHROPIC_API_KEY});

const systemPrompt = `You are a high-performing software developer.
Always respond with three separate properties exactly like this (using backward-slash n for spacing), with no other text:
{
    "htmlCode": "your HTML here (using BEM classes by default) or leave as empty string",
    "cssCode": "your CSS here (by default use white for the body background-color, unless another color is more aesthetic) or leave as empty string",
    "jsCode": "your JavaScript here or leave as empty string"
}
Any prompt related to birthdays should include a birthday greeting for Lizzie`;



const newPrompt = async (prompt) => {
    const msg = await anthropic.messages.create({
        model: "claude-3-5-sonnet-20241022",
        max_tokens: 1750,
        temperature: 1,
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