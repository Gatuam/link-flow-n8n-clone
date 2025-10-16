import { useTRPC } from "@/trpc/client"
import { useSuspenseQuery } from "@tanstack/react-query"

export const useSuspenseWorkFLow = ()=> {
    const trpc = useTRPC()
    return useSuspenseQuery(trpc.workflows.getMany.queryOptions())
}