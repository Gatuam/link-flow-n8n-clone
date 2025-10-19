"use client";
import { useCreateWorkFlow, useSuspenseWorkFLow } from "../hooks/use-workflows";

import React from "react";
import {
  EntityContainer,
  EntityHeader,
  EntityPagination,
  EntitySearch,
} from "@/components/global/entity-components";
import { useUpgradePopup } from "../hooks/use-upgrade-popup";
import { useWorkflowsParams } from "../hooks/use-workflow-params";
import { UseEntitySearchDebounce } from "@/hooks/use-entuity-serach";

export const WorkFlowsList = () => {
  const workflows = useSuspenseWorkFLow();
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
