import prisma from "@/db/prisma";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import {
  polar,
  checkout,
  portal,
  usage,
  webhooks,
} from "@polar-sh/better-auth";
import { polarClient } from "./polar";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  plugins: [
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [
            {
              productId: "fe7c1f3d-5a58-48dd-ac7a-0bd3dd74601c",
              slug: "n8n-dev",
            },
          ],
          successUrl: process.env.POLAR_SUCCESS_URL,
        }),
        portal(),
      ],
    }),
  ],
});
