import { Tooltip, Button } from "@material-tailwind/react";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";


export const Card1Tooltip = () => {
  return (
    <>
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
        content="Next.js"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiNextdotjs className="text-3xl text-black" />
        </Button>
      </Tooltip>

      <Tooltip
        className="bg-gray-900 p-3 text-gray-100 rounded-md"
        content="TypeScript"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <Button className="shadow-none">
          <SiTypescript className="text-3xl text-sky-600" />
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
          <SiTailwindcss className="text-3xl text-cyan-500" />
        </Button>
      </Tooltip>
    </>
  );
};
