import { Tooltip, Button } from "@material-tailwind/react";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";


export const Card3Tooltip = () => {
  return (
    <>
      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="TypeScript"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
        <SiTypescript className="text-3xl text-sky-600"/>
        </Button>

      </Tooltip>
      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="React.js"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <FaReact className="text-3xl text-sky-500" />
        </Button>

      </Tooltip>
      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="TailwindCSS"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
        <SiTailwindcss className="text-3xl text-cyan-500"/>
        </Button>
      </Tooltip>
    </>
  );
};
