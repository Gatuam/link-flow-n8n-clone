import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { inngest } from "@/inngest/client";

export const appRouter = createTRPCRouter({
  testAi: baseProcedure.mutation(async () => {
  const data =  await inngest.send({
      name : "execute/ai"
    })
    return data
  }),
  hello: baseProcedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});
// export type definition of API
export type AppRouter = typeof appRouter;
