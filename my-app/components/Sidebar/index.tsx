"use client"

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
} from "@material-tailwind/react";
import { HiMenuAlt3 } from "react-icons/hi"
import { FaRegAddressCard, FaBlogger } from "react-icons/fa"
import { TbRoad } from "react-icons/tb"
import { FiGitPullRequest } from "react-icons/fi"
import { IoClose } from "react-icons/io5"

import Link from "next/link";
import { NavLinks } from "../NavLinks";

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <>
      <div className="flex w-full justify-between items-center px-5 py-3">
        <Link onClick={() => setOpen(false)} href="/" className="text-black font-semibold">RianVitor26</Link>
        <NavLinks/>
        <Button onClick={openDrawer} className="p-2"><HiMenuAlt3 className="text-black text-2xl"/></Button>
      </div>
      <Drawer open={open} onClose={closeDrawer} overlay={false} className="fixed right-0-0 top-0 bg-white z-20">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Menu
          </Typography>
          <IoClose onClick={() => setOpen(false)} className="text-xl cursor-pointer"/>
        </div>
        <List>
          <Link onClick={() => setOpen(false)} href="/">
            <ListItem>
              <ListItemPrefix>
                <FaRegAddressCard className="text-xl"/>
              </ListItemPrefix>
              <span className="ml-2">Sobre</span>
            </ListItem>
          </Link>
          <Link onClick={() => setOpen(false)} href="/carrer">
          <ListItem>
            <ListItemPrefix>
              <TbRoad className="text-xl"/>
            </ListItemPrefix>
            <span className="ml-2">Carreira</span>
          </ListItem>
          </Link>
          <Link onClick={() => setOpen(false)} href="/projects">
          <ListItem>
            <ListItemPrefix>
              <FiGitPullRequest  className="text-xl"/>
            </ListItemPrefix>
            <span className="ml-2">Projetos</span>
          </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <FaBlogger className="text-xl"/>
            </ListItemPrefix>
            <Link target="_blank" href="https://notion-blog-ipb2de6bi-rianvitor26.vercel.app/blog" className="ml-2">Blog</Link>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}