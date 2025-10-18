"use client";
import { useCreateWorkFlow, useSuspenseWorkFLow } from "../hooks/use-workflows";

import React from "react";
import {
  EntityContainer,
  EntityHeader,
} from "@/components/global/entity-components";
import { useUpgradePopup } from "../hooks/use-upgrade-popup";

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

export const WorkFlowContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer
      header={<WorkFlowHeader />}
      search={<></>}
      pagination={<></>}
    >
      {children}
    </EntityContainer>
  );
};
