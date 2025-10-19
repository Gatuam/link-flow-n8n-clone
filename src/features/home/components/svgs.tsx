import { Webhook } from "lucide-react";

export const LinesIcon = () => (
  <div className=" relative ">
    <svg
      width="480"
      height="121"
      viewBox="0 0 1040 151"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="0.5" x2="879" y2="0.5" stroke="gray" />
      <line y1="75.5" x2="879" y2="75.5" stroke="gray" />
      <line y1="150.5" x2="879" y2="150.5" stroke="gray" />
      <line x1="879.5" y1="2.18557e-08" x2="879.5" y2="151" stroke="gray" />
      <line x1="890" y1="75.5" x2="2040" y2="75.5" stroke="gray" />
    </svg>

    <div className=" h-10 w-10 absolute top-10 right-15 bg-indigo-400 border border-orange-500/10 rounded-sm shadow-2xl "></div>
    <Webhook className=" animate-spin text-accent absolute top-12 right-17  " />
  </div>
);
