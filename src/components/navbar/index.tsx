"use client";
import React, { useState, useRef, useEffect } from 'react'
import Container from '../Container'
import Image from 'next/image'
import { AnimatePresence, easeInOut, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react"
import { Link } from 'next-view-transitions';
import { useTheme } from 'next-themes';


const Navbar = () => {
    const navItems = [
        {
            title: "Home",
            href: "/",
            icon: "🏠"
        },
        {
            title: "About",
            href: "/about",
            icon: "👤"
        },
        {
            title: "Projects",
            href: "/projects",
            icon: "💼"
        },
        {
            title: "Contact",
            href: "/contact",
            icon: "✉️"
        },
        {
            title: "Blog",
            href: "/blog",
            icon: "📝"
        },
    ]

    const [hovered, setHovered] = useState<number | null>(null)
    const [scrolled, setscrolled] = useState<boolean>(false)
    const [show, setShow] = useState<boolean>(false);
    const [searchValue, setSearchValue] = useState("");
    const modalRef = useRef<HTMLDivElement>(null);
    const searchRef = useRef<HTMLInputElement>(null);
    const [showHint, setShowHint] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const { theme, setTheme } = useTheme();


    const { scrollY } = useScroll()
    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 3000); // hide after 3s
        return () => clearTimeout(timer);
    }, []);


    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setShow(true);
            }
            if (e.key === "Escape") {
                setShow(false);
            }
        };

        const handleClickOutside = (e: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
                setShow(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    useEffect(() => {
        if (show && searchRef.current) {
            searchRef.current.focus();
        }
    }, [show]);

    const y = useTransform(scrollY, [0, 100], [0, 10]);
    const width = useTransform(scrollY, [0, 100], ["64%", "52%"]);
    const smallwidth = useTransform(scrollY, [0, 100], ["85%", "74%"]);

    useEffect(() => {
        if (typeof window !== "undefined") {
            setIsMobile(window.innerWidth <= 768);
        }
    }, []);


    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20) {
            setscrolled(true);
        } else[
            setscrolled(false)
        ]

    })

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.metaKey && e.key.toLowerCase() === 'k') {
                e.preventDefault(); // Optional: prevent browser default
                setShow(true);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);


    return (
        <Container className=''>
            <motion.nav
                style={{
                    boxShadow: scrolled ? "var(--shadow-box)" : "none",
                    width: isMobile ? smallwidth : width,
                    y
                }}
                transition={{
                    duration: 0.3,
                    ease: 'linear'
                }}
                className='fixed top-0 inset-x-0 left-0 z-40 max-w-4xl mx-auto flex items-center justify-between p-2 rounded-3xl bg-white dark:bg-neutral-900/60 dark:backdrop-blur-md dark:border dark:border-white/10 md:w-auto shadow-lg'>
                <Link href="/">
                    <Image className='w-12 h-13 rounded-full' src="/avatar.png" alt="image" width={100} height={100} />
                </Link>
                <div className='flex items-center gap-2'>
                    {/* Custom Dark/Light Mode Toggle Button */}

                    <div className='hidden md:flex items-center space-x-1'>
                        {navItems.map((item, idx) => (
                            <Link
                                className='text-sm relative px-2 py-1'
                                href={item.href}
                                key={idx}
                                onMouseEnter={() => setHovered(idx)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                {hovered === idx && (
                                    <motion.span
                                        layoutId="hovered-span"
                                        className='absolute inset-0 h-full w-full rounded-md bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-400'
                                    />
                                )}
                                <span className='relative z-10 dark:text-neutral-400'>{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <DarkModeToggle />
                    <motion.button
                        onClick={() => setShow(true)}
                        className="flex items-center md:hidden gap-2 px-1.5 py-1 text-sm text-neutral-600 dark:text-woodsmoke-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 border border-neutral-200 dark:border-woodmsmoke-200"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >

                        <motion.svg
                            width="20"
                            height="20"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-8 h-8 mx-auto rounded-md cursor-pointer dark:text-woodsmoke-200"
                            onClick={() => setShow(true)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            whileHover={{ scale: 1.15 }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20
                            }}
                        >

                            <motion.path
                                d="M18.0713 3.22449C17.2756 3.22449 16.5126 3.54056 15.95 4.10317C15.3874 4.66578 15.0713 5.42884 15.0713 6.22449V18.2245C15.0713 19.0201 15.3874 19.7832 15.95 20.3458C16.5126 20.9084 17.2756 21.2245 18.0713 21.2245C18.8669 21.2245 19.63 20.9084 20.1926 20.3458C20.7552 19.7832 21.0713 19.0201 21.0713 18.2245C21.0713 17.4288 20.7552 16.6658 20.1926 16.1032C19.63 15.5406 18.8669 15.2245 18.0713 15.2245H6.07129C5.27564 15.2245 4.51258 15.5406 3.94997 16.1032C3.38736 16.6658 3.07129 17.4288 3.07129 18.2245C3.07129 19.0201 3.38736 19.7832 3.94997 20.3458C4.51258 20.9084 5.27564 21.2245 6.07129 21.2245C6.86694 21.2245 7.63 20.9084 8.19261 20.3458C8.75522 19.7832 9.07129 19.0201 9.07129 18.2245V6.22449C9.07129 5.42884 8.75522 4.66578 8.19261 4.10317C7.63 3.54056 6.86694 3.22449 6.07129 3.22449C5.27564 3.22449 4.51258 3.54056 3.94997 4.10317C3.38736 4.66578 3.07129 5.42884 3.07129 6.22449C3.07129 7.02014 3.38736 7.7832 3.94997 8.34581C4.51258 8.90842 5.27564 9.22449 6.07129 9.22449H18.0713C18.8669 9.22449 19.63 8.90842 20.1926 8.34581C20.7552 7.7832 21.0713 7.02014 21.0713 6.22449C21.0713 5.42884 20.7552 4.66578 20.1926 4.10317C19.63 3.54056 18.8669 3.22449 18.0713 3.22449Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                fill="none"
                                initial={{
                                    pathLength: 0,
                                    opacity: 0
                                }}
                                animate={{
                                    pathLength: [0, 1, 0],
                                    opacity: 1
                                }}
                                transition={{
                                    pathLength: {
                                        duration: 1.6,
                                        times: [0, 0.5, 1],
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatDelay: 0.5
                                    },
                                    opacity: {
                                        duration: 0.5
                                    }
                                }}
                            />

                            {/* Optional: Add a subtle glow effect */}
                            {/* <motion.path 
            d="M18.0713 3.22449C17.2756 3.22449 16.5126 3.54056 15.95 4.10317C15.3874 4.66578 15.0713 5.42884 15.0713 6.22449V18.2245C15.0713 19.0201 15.3874 19.7832 15.95 20.3458C16.5126 20.9084 17.2756 21.2245 18.0713 21.2245C18.8669 21.2245 19.63 20.9084 20.1926 20.3458C20.7552 19.7832 21.0713 19.0201 21.0713 18.2245C21.0713 17.4288 20.7552 16.6658 20.1926 16.1032C19.63 15.5406 18.8669 15.2245 18.0713 15.2245H6.07129C5.27564 15.2245 4.51258 15.5406 3.94997 16.1032C3.38736 16.6658 3.07129 17.4288 3.07129 18.2245C3.07129 19.0201 3.38736 19.7832 3.94997 20.3458C4.51258 20.9084 5.27564 21.2245 6.07129 21.2245C6.86694 21.2245 7.63 20.9084 8.19261 20.3458C8.75522 19.7832 9.07129 19.0201 9.07129 18.2245V6.22449C9.07129 5.42884 8.75522 4.66578 8.19261 4.10317C7.63 3.54056 6.86694 3.22449 6.07129 3.22449C5.27564 3.22449 4.51258 3.54056 3.94997 4.10317C3.38736 4.66578 3.07129 5.42884 3.07129 6.22449C3.07129 7.02014 3.38736 7.7832 3.94997 8.34581C4.51258 8.90842 5.27564 9.22449 6.07129 9.22449H18.0713C18.8669 9.22449 19.63 8.90842 20.1926 8.34581C20.7552 7.7832 21.0713 7.02014 21.0713 6.22449C21.0713 5.42884 20.7552 4.66578 20.1926 4.10317C19.63 3.54056 18.8669 3.22449 18.0713 3.22449Z"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            opacity="0.3"
            filter="blur(2px)"
            initial={{
              pathLength: 0,
            }}
            animate={{
              pathLength: [0, 1, 0],
            }}
            transition={{
              pathLength: { 
                duration: 4,
                times: [0, 0.5, 1], 
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.5
              }
            }}
          /> */}
                        </motion.svg>
                    </motion.button>

                </div>
            </motion.nav>

            {/* Command Modal */}
            <AnimatePresence>
                {show && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/40 dark:bg-neutral-900/60 dark:backdrop-blur-md dark:border dark:border-white/10 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            ref={modalRef}
                            className="fixed left-1/2 top-[20%] w-full  max-w-[90%] -translate-x-1/2 rounded-xl bg-white dark:bg-neutral-900/60 dark:backdrop-blur-md dark:border dark:border-white/10 shadow-2xl border border-neutral-200 dark:border-neutral-800"
                            initial={{ opacity: 0, y: -50, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -40, scale: 0.9 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                        >
                            <div className="p-4">
                                <div className="flex items-center gap-3 border-b dark:border-woodsmoke-800 pb-4">
                                    <svg
                                        className="w-5 h-5 text-neutral-500 dark:text-woodsmoke-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                    <input
                                        ref={searchRef}
                                        type="text"
                                        value={searchValue}
                                        onChange={(e) => setSearchValue(e.target.value)}
                                        placeholder="Type a command or search..."
                                        className="flex-1 bg-transparent text-neutral-900 dark:text-woodsmoke-300 placeholder-neutral-400 dark:placeholder-woodsmoke-500 outline-none text-base"
                                        spellCheck={false}
                                    />
                                    <kbd className="hidden sm:block px-2 py-1 text-xs font-semibold text-neutral-500 dark:text-woodsmoke-400 bg-neutral-100 dark:bg-neutral-800 rounded">
                                        ESC
                                    </kbd>
                                </div>

                                <nav className="mt-4 space-y-2">
                                    <div className="text-xs font-medium text-neutral-400 dark:text-woodsmoke-500 uppercase ml-2 mb-2">Navigation</div>
                                    {navItems
                                        .filter(item =>
                                            item.title.toLowerCase().includes(searchValue.toLowerCase())
                                        )
                                        .map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: idx * 0.05 }}
                                            >
                                                <Link
                                                    href={item.href}
                                                    onClick={() => setShow(false)}
                                                    className="flex items-center gap-3 px-3 py-2 text-sm text-neutral-700 dark:text-woodsmoke-400 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                                                >
                                                    <span className="text-lg">{item.icon}</span>
                                                    {item.title}
                                                </Link>
                                            </motion.div>
                                        ))}
                                </nav>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </Container>
    )
}

const DarkModeToggle = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme !== "light");

    return (
        <motion.button
            onClick={() => {
                setIsDark(v => !v)
                setTheme(theme === "light" ? "dark" : "light")
            }}
            className="relative w-20 h-10 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center px-1 focus:outline-none overflow-hidden"
            style={{
                background: isDark
                    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)'
                    : 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 50%, #93c5fd 100%)',
                boxShadow: isDark
                    ? '0 4px 15px 0 rgba(15, 23, 42, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                    : '0 4px 15px 0 rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.8)'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Toggle dark mode"
        >
            {/* Night Sky Background */}
            <AnimatePresence>
                {isDark && (
                    <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full overflow-hidden pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Starfield */}
                        <div className="absolute inset-0">
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-1 h-1 bg-yellow-200 rounded-full"
                                    style={{
                                        left: `${Math.random() * 85 + 5}%`,
                                        top: `${Math.random() * 70 + 15}%`,
                                    }}
                                    animate={{
                                        opacity: [0.3, 1, 0.3],
                                        scale: [0.5, 1.2, 0.5]
                                    }}
                                    transition={{
                                        duration: 2 + Math.random() * 2,
                                        repeat: Infinity,
                                        delay: Math.random() * 2
                                    }}
                                />
                            ))}
                        </div>
                        
                        {/* Moon with glow */}
                        {/* <motion.div
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                            animate={{
                                rotate: [0, 5, -5, 0],
                                
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="relative">
                                <div className="w-5 h-5 bg-yellow-100 rounded-full shadow-lg"></div>
                                <div className="absolute inset-0 w-5 h-5 bg-yellow-200 rounded-full animate-pulse opacity-50"></div>
                                {/* Moon craters */}
                                <div className="absolute top-1 left-1 w-1 h-1 bg-gray-300 rounded-full opacity-40"></div>
                                <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-300 rounded-full opacity-40"></div>
                            {/* </div>
                        </motion.div> */} 

                        {/* Shooting star */}
                        <motion.div
                            className="absolute w-8 h-0.5 bg-gradient-to-r from-transparent via-yellow-200 to-transparent"
                            animate={{
                                x: [100, 0],
                                y: [10, 25],
                                opacity: [0, 1, 0]
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatDelay: 3,
                                ease: "easeOut"
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Day Sky Background */}
            <AnimatePresence>
                {!isDark && (
                    <motion.div 
                        className="absolute inset-0 w-full h-full rounded-full overflow-hidden pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Floating clouds */}
                        <motion.div
                            className="absolute top-1 left-2 w-3 h-2 bg-white rounded-full opacity-70"
                            animate={{
                                x: [0, 15, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        />
                        <motion.div
                            className="absolute bottom-1 left-1 w-2 h-1 bg-white rounded-full opacity-60"
                            animate={{
                                x: [0, 20, 0],
                                scale: [1, 1.2, 1]
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 1
                            }}
                        />
                        
                        {/* Sun with rays */}
                        <motion.div
                            className="absolute right-2 top-1/2 transform -translate-y-1/2"
                            animate={{
                                rotate: [0, 360]
                            }}
                            transition={{
                                duration: 8,
                                repeat: Infinity,
                                ease: "linear"
                            }}
                        >
                            <div className="relative">
                                {/* Sun rays */}
                                {[...Array(8)].map((_, i) => (
                                    <div
                                        key={i}
                                        className="absolute w-0.5 h-1 bg-yellow-400 rounded-full"
                                        style={{
                                            transform: `rotate(${i * 45}deg) translateY(-8px)`,
                                            transformOrigin: 'center 8px'
                                        }}
                                    />
                                ))}
                                {/* Sun body */}
                                <div className="w-4 h-4 bg-yellow-400 rounded-full shadow-lg relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-300 to-orange-400"></div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Flying birds */}
                        <motion.div
                            className="absolute top-2 left-4"
                            animate={{
                                x: [0, 25, 0],
                                y: [0, -2, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <svg width="8" height="6" viewBox="0 0 8 6" className="text-gray-600">
                                <path d="M1 3 Q2 1, 3 3 Q4 1, 5 3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                                <path d="M3 3 Q4 1, 5 3 Q6 1, 7 3" stroke="currentColor" strokeWidth="0.5" fill="none"/>
                            </svg>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Enhanced Knob */}
            <motion.div
                className="w-8 h-8 rounded-full shadow-lg z-10 overflow-hidden border-2"
                animate={{
                    x: isDark ? 0 : 38
                }}
                transition={{ 
                    type: 'spring', 
                    stiffness: 500, 
                    damping: 30 
                }}
                style={{
                    background: isDark 
                        ? 'linear-gradient(135deg, #1f2937 0%, #374151 100%)'
                        : 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%)',
                    borderColor: isDark ? '#6b7280' : '#d97706',
                    boxShadow: isDark
                        ? '0 4px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                        : '0 4px 8px rgba(245, 158, 11, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)'
                }}
            >
                {/* Knob icon - Full Moon in Dark Mode */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <AnimatePresence mode="wait">
                        {isDark ? (
                            <motion.div
                                key="moon"
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.5 }}
                                transition={{ duration: 0.3 }}
                                className="flex items-center justify-center"
                            >
                                {/* Full Moon */}
                                <div className="w-5 h-5 bg-yellow-100 rounded-full shadow-inner relative -left-[18px] ">
                                    <div className="absolute inset-0 bg-gradient-to-br from-yellow-200 to-yellow-300 rounded-full"></div>
                                    {/* Moon craters for detail */}
                                    <div className="absolute top-1.5 left-1.5 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-60"></div>
                                    <div className="absolute bottom-1 right-1 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-40"></div>
                                    <div className="absolute top-1 right-1.5 w-0.5 h-0.5 bg-gray-400 rounded-full opacity-50"></div>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="sun"
                                initial={{ opacity: 0, rotate: -90 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 90 }}
                                transition={{ duration: 0.3 }}
                                className="text-orange-100 text-xl flex items-center justify-center"
                            >
                                ☀️
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.div>
        </motion.button>
    );
};

export default Navbar;
