import { Tooltip, Button } from "@material-tailwind/react";
import { DiMongodb, DiJavascript } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";


export const Card2Tooltip = () => {
  return (
    <>
    <Tooltip
      className="bg-gray-900 p-3 text-gray-100 rounded-md"
      content="Node.js"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        <FaNodeJs className="text-3xl text-green-500"/>
      </Button>

    </Tooltip>
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
      content="Express.js"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        <SiExpress className="text-3xl text-black"/>
      </Button>
    </Tooltip>
    <Tooltip
      className="bg-gray-900 p-3 text-gray-100 rounded-md"
      content="MongoDB"
      animate={{
        mount: { scale: 1, y: 0 },
        unmount: { scale: 0, y: 25 },
      }}
    >
      <Button className="shadow-none">
        <DiMongodb className="text-3xl text-lime-600"/>
      </Button>
    </Tooltip>
    </>
  );
};
