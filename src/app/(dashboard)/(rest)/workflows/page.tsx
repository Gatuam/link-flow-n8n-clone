import {
  WorkFlowContainer,
  WorkFlowsList,
} from "@/features/workflows/components/workflow";
import { workflowslSearchParams } from "@/features/workflows/lib/params";
import { prefetchWorkflows } from "@/features/workflows/server/prefetch";
import { HydrateClient } from "@/trpc/server";
import { SearchParams } from "nuqs";
import React, { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

type Props = {
  searchParams: Promise<SearchParams>
}

const Page = async ({searchParams}: Props) => {
  const parsms = await workflowslSearchParams(searchParams)
  prefetchWorkflows(parsms);

  return (
    <WorkFlowContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<>Error......</>}>
          <Suspense fallback={<>Loading.......</>}>
            <WorkFlowsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </WorkFlowContainer>
  );
};

export default Page;
