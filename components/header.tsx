import React from 'react'
import { MenuProvider } from '../context/MenuContext'
import Menu from './menu';
import { MenuItemProps } from './props'
import RollMenu from './rollmenu';
import  SideBar  from './sidebar';


const links : MenuItemProps[]= [
    { href: "/products", label: "Products" },
    { href: "/our-story", label: "Our Story" },
    { href: "/workshop", label: "Workshop" },
    { href: "/showroom", label: "Showroom" },
    { href: "/long-name", label: "A very long name to show the animation" },
  ];

export default function Header() {
  return (
    <MenuProvider len={links.length}>
        <RollMenu links={links} breadname='Fur Nature'></RollMenu>
        <SideBar links={links} />
    </MenuProvider>
  )
}
