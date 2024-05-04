"use client"
import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const pathname = usePathname()
    const listStyles = 'capitalize px-4 py-2 rounded-full cursor-pointer '
    const activeStyles = "bg-foreground text-background font-bold"
    const inactiveStyles = "text-foreground font-semibold"
    const routes = [
        {
            route: "/",
            routeName: "home"
        },
        {
            route: "/books",
            routeName: "books"
        },
    ]
    return (
        <nav className='flex justify-between items-center m-4 px-8'>
            <h1 className='font-black text-xl md:text-3xl lg:text-5xl'>BOOKS</h1>
            <ul className='sm:flex items-center space-x-4 hidden'>
                {routes.map((route) => {
                    const isActive = pathname === route.route;
                    const activeClass = isActive ? activeStyles : inactiveStyles;
                    return (
                        <Link href={route.route} key={route.route}>
                            <li className={`${listStyles} ${activeClass}`}>
                                {route.routeName}
                            </li>
                        </Link>
                    );
                })}

            </ul>
            <div className='block sm:hidden'>
                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <h1 className='font-black text-xl md:text-3xl lg:text-5xl'>BOOKS</h1>
                        </SheetHeader>
                        <ul className='flex flex-col'>
                            {routes.map((route) => {
                                const isActive = pathname === route.route;
                                const activeClass = isActive ? activeStyles : inactiveStyles;
                                return (
                                    <Link href={route.route} key={route.route}>
                                        <li className={`${listStyles} w-1/2 text-center ${activeClass}`}>
                                            {route.routeName}
                                        </li>
                                    </Link>
                                );
                            })}
                        </ul>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}

export default Navbar