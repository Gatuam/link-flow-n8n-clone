import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";
import { generateText } from "ai";

const google = createGoogleGenerativeAI();
export const executeAi = inngest.createFunction(
  { id: "execute" },
  { event: "execute/ai" },
  async ({ event, step }) => {
    const { steps } = await step.ai.wrap("gemini-gen-text", generateText, {
      model: google("gemini-2.5-flash"),
      system: "Assistent who is good at math",
      prompt: "What is 2 + 2",
    });
    return steps;
  }
);
