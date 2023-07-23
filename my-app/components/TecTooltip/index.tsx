import { Tooltip, Button } from "@material-tailwind/react";

type TecTooltipProps = {
  tecName: string;
  icon: React.ReactNode; 
};

export const TecTooltip = ({ tecName, icon }: TecTooltipProps) => {
  return (
    <Tooltip
      className="bg-gray-900 p-3 text-gray-100 rounded-md"
      content={tecName}
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        {icon} 
      </Button>
    </Tooltip>
  );
};
