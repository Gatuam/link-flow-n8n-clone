"use client";
import { Button } from "@/components/ui/button";
import prisma from "@/db/prisma";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const trpc = useTRPC();
  const queryClient = useQueryClient();
  const textAi = useMutation(trpc.testAi.mutationOptions());
  console.log(textAi);

  return (
    <div>
      <Button disabled={textAi.isPending} onClick={() => textAi.mutate()}>
        Test ai
      </Button>
      hi
    </div>
  );
}
