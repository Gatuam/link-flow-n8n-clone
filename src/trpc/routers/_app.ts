import { z } from "zod";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";
import { inngest } from "@/inngest/client";
import { workFlowsRouter } from "@/features/workflows/server/routers";

export const appRouter = createTRPCRouter({
  workflows: workFlowsRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;
