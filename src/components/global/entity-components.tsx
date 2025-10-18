import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type EntityHeaderProps = {
  title: string;
  description?: string;
  newButtonLabel: string;
  disable?: boolean;
  isCreating?: boolean;
} & (
  | { onNew: () => void; newButtonHerf?: never }
  | { newButtonHerf: string; onNew?: never }
  | { onNew?: never; newButtonHerf?: never }
);

export const EntityHeader = ({
  title,
  description,
  newButtonLabel,
  disable,
  isCreating,
  onNew,
  newButtonHerf,
}: EntityHeaderProps) => {
  return (
    <div className=" flex flex-row items-center justify-between gap-x-4 ">
      <div className=" flex flex-col">
        <h1 className=" text-lg md:text-xl font-semibold">{title}</h1>
        {description && (
          <p className=" text-xs md:text-sm text-muted-foreground">
            {description}
          </p>
        )}
      </div>
      {onNew && !newButtonHerf && (
        <Button
          onClick={() => onNew()}
          size={"sm"}
          disabled={isCreating || disable}
        >
          <Plus className=" border-spacing-x-4" />
          {newButtonLabel}
        </Button>
      )}
      {newButtonHerf && !onNew && (
        <Button asChild size={"sm"}>
          <Link href={newButtonHerf} prefetch>
            <Plus className=" border-spacing-x-4" />
            {newButtonLabel}
          </Link>
          {newButtonLabel}
        </Button>
      )}
    </div>
  );
};

type EntityContainerProps = {
  children?: React.ReactNode;
  header?: React.ReactNode;
  search?: React.ReactNode;
  pagination?: React.ReactNode;
};

export const EntityContainer = ({
  children,
  header,
  search,
  pagination,
}: EntityContainerProps) => {
  return (
    <div className=" p-4 md:px-10 md:py-6 h-full">
      <div className=" mx-auto max-w-screen-xl w-full flex flex-col gap-y-6 h-full ">
        {header}
        <div className=" flex flex-col gap-y-4">
          {search}
          {children}
        </div>
        {pagination}
      </div>
    </div>
  );
};
