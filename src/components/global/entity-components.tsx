import React from "react";
import { Button } from "../ui/button";
import { AlertTriangle, Loader, Plus, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

import { FolderMinus } from "tabler-icons-react";
import { ArrowUpRightIcon } from "lucide-react";

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";

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
        <div className=" flex flex-1  flex-col gap-y-4">
          {search}
          {children}
        </div>
        {pagination}
      </div>
    </div>
  );
};

interface EntitySearchProps {
  value: string;
  onChange: (value: string) => void;
  plceHolder?: string;
}

export const EntitySearch = ({
  value,
  onChange,
  plceHolder,
}: EntitySearchProps) => {
  return (
    <div className=" ml-2 relative ">
      <Search className=" absolute size-3.5 left-3 top-1/2 text-muted-foreground -translate-y-1/2" />
      <Input
        placeholder={plceHolder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className=" max-w-[220px] bg-background border-border pl-8 "
      />
    </div>
  );
};

interface EntityPaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  disable?: boolean;
}

export const EntityPagination = ({
  page,
  totalPages,
  onPageChange,
  disable,
}: EntityPaginationProps) => {
  return (
    <div className=" flex items-center justify-between gap-x-4">
      <div className=" flex-1 text-sm text-muted-foreground">
        Page{page} of {totalPages || 1}
      </div>
      <div className=" flex items-center justify-end space-x-3 py-4 ">
        <Button
          disabled={page === 1 || disable}
          variant={"outline"}
          size={"sm"}
          onClick={() => onPageChange(Math.max(1, page - 1))}
        >
          Previous
        </Button>
        <Button
          variant={"default"}
          disabled={page === totalPages || totalPages === 0 || disable}
          onClick={() => onPageChange(Math.min(page + 1, totalPages + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

type StateViewProps = {
  message?: string;
};

type LoadingViewProps = {
  entity?: string;
} & StateViewProps;

export const LoadingView = ({
  entity = "items",
  message,
}: LoadingViewProps) => {
  return (
    <div className=" flex justify-center items-center h-full flex-1  gap-y-4">
      <div className=" animate-pulse">
        <Loader className=" size-6 animate-spin text-muted-foreground" />
        <p className=" text-sm text-muted-foreground">
          {message || `Laoding...${entity}`}
        </p>
      </div>
    </div>
  );
};

type ErrorViewProps = {
  entity?: string;
} & StateViewProps;

export const ErrorView = ({ entity = "items", message }: ErrorViewProps) => {
  return (
    <div className=" flex justify-center items-center h-full flex-1  gap-y-4">
      <div className=" animate-pulse">
        <AlertTriangle className=" size-6 animate-spin text-destructive" />
        <p className=" text-sm text-muted-foreground">
          {message || `Error...${entity}`}
        </p>
      </div>
    </div>
  );
};

type EmptyViewProps = {
  onNew?: () => void;
} & StateViewProps;

export function EmptyView({ message, onNew }: EmptyViewProps) {
  return (
    <Empty className=" border bg-accent">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderMinus />
        </EmptyMedia>
        <EmptyTitle>No Projects or Invalid Query? </EmptyTitle>
        <EmptyDescription>
          {message
            ? message
            : `You haven&apos;t created any projects yet. Get started by creating
          your first project.`}
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button onClick={onNew}>Create Project</Button>
      </EmptyContent>
    </Empty>
  );
}


