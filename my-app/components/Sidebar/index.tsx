"use client"

import React from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import { RiMenu2Line } from "react-icons/ri"
import { FaRegAddressCard, FaBlogger } from "react-icons/fa"
import { TbRoad } from "react-icons/tb"
import { FiGitPullRequest } from "react-icons/fi"

import Link from "next/link";

export const Sidebar = () => {
  const [open, setOpen] = React.useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  return (
    <div>
      <div className="flex w-full justify-between items-center px-5 py-3">
        <Link onClick={() => setOpen(false)} href="/" className="text-black font-semibold">RianVitor26</Link>
        <Button onClick={openDrawer} className="p-2"><RiMenu2Line className="text-black text-xl" /></Button>
      </div>
      <Drawer open={open} onClose={closeDrawer} className="fixed right-0-0 top-0 z-10  shadow-md">
        <div className="mb-2 flex items-center justify-between p-4">
          <Typography variant="h5" color="blue-gray">
            Menu
          </Typography>
          <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <List>
          <Link onClick={() => setOpen(false)} href="/">
            <ListItem>
              <ListItemPrefix>
                <FaRegAddressCard className="text-xl"/>
              </ListItemPrefix>
              <span>Sobre</span>
            </ListItem>
          </Link>
          <Link onClick={() => setOpen(false)} href="/carrer">
          <ListItem>
            <ListItemPrefix>
              <TbRoad className="text-xl"/>
            </ListItemPrefix>
            <span>Carreira</span>
          </ListItem>
          </Link>
          <Link onClick={() => setOpen(false)} href="/projects">
          <ListItem>
            <ListItemPrefix>
              <FiGitPullRequest  className="text-xl"/>
            </ListItemPrefix>
            <span>Projetos</span>
            <ListItemSuffix>
              <Chip
                value="3"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          </Link>
          <ListItem>
            <ListItemPrefix>
              <FaBlogger className="text-xl"/>
            </ListItemPrefix>
            <Link target="_blank" href="https://notion-blog-ipb2de6bi-rianvitor26.vercel.app/blog">Blog</Link>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}