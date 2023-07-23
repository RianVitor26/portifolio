import { Tooltip, Button } from "@material-tailwind/react";
import { FaReact } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { DiJavascript } from "react-icons/di";


export const Card3Tooltip = () => {
  return (
    <>
    <Tooltip
      className="bg-gray-900 p-3 text-gray-100 rounded-md"
      content="JavaScript"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        <DiJavascript className="text-3xl text-yellow-500"/>
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
        <FaReact className="text-3xl text-sky-500"/>
      </Button>

    </Tooltip>
    <Tooltip
      className="bg-gray-900 p-3 text-gray-100 rounded-md"
      content="Styled-Components"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        <SiStyledcomponents className="text-4xl text-pink-600"/>
      </Button>
    </Tooltip>
    </>
  );
};
