"use client";
import { useCreateWorkFlow, useSuspenseWorkFLow } from "../hooks/use-workflows";

import React from "react";
import {
  EmptyView,
  EntityContainer,
  EntityHeader,
  EntityPagination,
  EntitySearch,
  ErrorView,
  LoadingView,
} from "@/components/global/entity-components";
import { useUpgradePopup } from "../hooks/use-upgrade-popup";
import { useWorkflowsParams } from "../hooks/use-workflow-params";
import { UseEntitySearchDebounce } from "@/hooks/use-entuity-serach";

export const WorkFlowsList = () => {
  const workflows = useSuspenseWorkFLow();

  if (workflows.data.items.length === 0) {
    return <WorkflowEmpty />;
  }

  return <div>{JSON.stringify(workflows.data, null, 2)}</div>;
};

export const WorkFlowHeader = ({ disable }: { disable?: boolean }) => {
  const createWorkflow = useCreateWorkFlow();
  const { handleError, modal } = useUpgradePopup();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onError: (error) => {
        handleError(error);
      },
    });
  };
  return (
    <>
      {modal}
      <EntityHeader
        title="Workflows"
        description="Create and manage your workflows"
        onNew={() => handleCreate()}
        newButtonLabel="New workflows"
        disable={disable}
        isCreating={createWorkflow.isPending}
      />
    </>
  );
};

export const WorkflowSearch = () => {
  const [params, setParams] = useWorkflowsParams();
  const { searchValus, onSearchChange } = UseEntitySearchDebounce({
    params,
    setParams,
  });
  return (
    <EntitySearch
      value={searchValus}
      onChange={onSearchChange}
      plceHolder="Serach workflow"
    />
  );
};

export const WorkflowPagination = () => {
  const workflow = useSuspenseWorkFLow();
  const [params, setParams] = useWorkflowsParams();

  return (
    <EntityPagination
      onPageChange={(page) => setParams({ ...params, page })}
      disable={workflow.isFetching}
      totalPages={workflow.data.totalPages}
      page={workflow.data.page}
    />
  );
};

export const WorkflowLoading = () => {
  return <LoadingView entity="workflows" />;
};

export const WorkflowError = () => {
  return <ErrorView entity="worklow" />;
};

export const WorkflowEmpty = () => {
  const createWorkflow = useCreateWorkFlow();
  const { handleError, modal } = useUpgradePopup();

  const handleCreate = () => {
    createWorkflow.mutate(undefined, {
      onError: (err) => {
        handleError(err);
      },
    });
  };
  return (
    <>
      {modal}
      <EmptyView
        onNew={handleCreate}
        message="You haven't create a workflow yet with this name or the workflow didn't exist. Get start by creat a workflow."
      />
    </>
  );
};

export const WorkFlowContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkFlowHeader />}
      search={<WorkflowSearch />}
      pagination={<WorkflowPagination />}
    >
      {children}
    </EntityContainer>
  );
};
