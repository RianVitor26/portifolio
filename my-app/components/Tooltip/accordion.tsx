import { Tooltip, Button } from "@material-tailwind/react";
import React from "react";

type AccordionTooltipTypes = {
    tecName: string;
    icon: React.ReactNode
}
 
export const AccordionTooltip = ({tecName, icon}: AccordionTooltipTypes) => {
  return (
    <Tooltip
      className="text-gray-100 bg-gray-900 p-2 rounded-md"
      content={tecName}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button>{icon}</Button>
    </Tooltip>
  );
}