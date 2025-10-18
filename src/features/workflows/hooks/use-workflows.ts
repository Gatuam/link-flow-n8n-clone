import { useTRPC } from "@/trpc/client";
import {
  useMutation,
  useQueryClient,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const useSuspenseWorkFLow = () => {
  const trpc = useTRPC();
  return useSuspenseQuery(trpc.workflows.getMany.queryOptions());
};

export const useCreateWorkFlow = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const trpc = useTRPC();

  return useMutation(
    trpc.workflows.create.mutationOptions({
      onSuccess: (data) => {
        toast.success(`WorkFlow create"${data.name}"`);
        router.push(`/workflows/${data.id}`);
        queryClient.invalidateQueries(trpc.workflows.getMany.queryOptions());
      },
      onError: (err) => {
        toast.error(err.message);
      },
    })
  );
};
