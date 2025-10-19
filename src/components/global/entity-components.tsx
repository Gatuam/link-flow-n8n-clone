import React from "react";
import { Button } from "../ui/button";
import { Plus, Search } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";

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
          onClick={() => onPageChange(Math.min(totalPages, totalPages + 1))}
        >
          Next
        </Button>
      </div>
    </div>
  );
};
