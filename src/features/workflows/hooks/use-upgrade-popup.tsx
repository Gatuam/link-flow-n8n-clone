import { UpgradePopUp } from "@/components/global/upgrade-popup";
import { TRPCClientError } from "@trpc/client";
import { useState } from "react";

export const useUpgradePopup = () => {
  const [open, setOpen] = useState(false);

  const handleError = (error: unknown) => {
    if (error instanceof TRPCClientError) {
      if (error.data.code === "FORBIDDEN") {
        setOpen(true);
        return true;
      }
    }
    return false;
  };

  const modal = <UpgradePopUp open={open} onOpenChange={setOpen} />;

  return {handleError, modal}
};
