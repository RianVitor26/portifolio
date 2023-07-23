"use client"

import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import Link from "next/link";
import { FaLinkedin, FaDiscord } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi"

export const ContactPopover = () => {
  return (
    <Popover placement="bottom">
      <PopoverHandler>
        <Button className="bg-black rounded-md text-gray-100 px-5 mt-5">Contatos</Button>
      </PopoverHandler>
      <PopoverContent className="w-72">
        <div className="mb-4 flex items-center gap-4 border-b border-blue-gray-50 pb-4">
          <div>
            <Typography variant="h6" color="blue-gray">
              Contatos
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              Converse comigo!
            </Typography>
          </div>
        </div>
        <List className="p-0">
          <Link target="_blank" href="mailto:rianvitorlhe@gmail.com">
            <ListItem>
              <ListItemPrefix>
                <BiLogoGmail className="mr-2 text-xl text-red-600" />
              </ListItemPrefix>
              Gmail
            </ListItem>
          </Link>


          <Link target="_blank" href="https://www.linkedin.com/in/rian-vitor-dos-santos-de-almeida-a036aa202/">
            <ListItem>
              <ListItemPrefix>
                <FaLinkedin className="mr-2 text-xl text-blue-500" />
              </ListItemPrefix>
              Linkedin
            </ListItem>
          </Link>


          <Link target="_blank" href="https://discord.com/channels/@me">
            <ListItem>
              <ListItemPrefix>
                  <FaDiscord className="mr-2 text-xl text-indigo-600"/>
              </ListItemPrefix>
              Discord (RianVitor26#0458)
            </ListItem>
          </Link>
        </List>
      </PopoverContent>
    </Popover>
  );
}