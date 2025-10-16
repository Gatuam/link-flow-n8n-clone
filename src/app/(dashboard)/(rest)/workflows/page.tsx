import { WorkFlowsList } from '@/features/workflows/components/workflow';
import { prefetchWorkflows } from '@/features/workflows/server/prefetch'
import { HydrateClient } from '@/trpc/server';
import React, { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary';

const Page = async() => {
  prefetchWorkflows();

  return (
    <HydrateClient>
      <ErrorBoundary fallback={<>Error......</>}>
        <Suspense fallback={<>Loading.......</>} >
          <WorkFlowsList/>
        </Suspense>
      </ErrorBoundary>
    </HydrateClient>
  )
}

export default Page