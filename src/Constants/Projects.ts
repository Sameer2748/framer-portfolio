export type Project = {
    title: string;
    src: string;
    description: string;
    href: string;
    images?:any;
}


export const projects: Project[] = [
    {
        title: "2D-metaverse",
        src: "/2d-metaverse.png",
        description: "A virtual collaboration space where users can create their own team rooms and navigate using avatars. One-on-one video calls are triggered when two users face each other, while group video calls happen inside left bottom meeting room. Includes real-time chat for both the entire playground and private meeting rooms. Built for seamless interaction and remote team collaboration.",
        href: "/projects/2d-metaverse"
    },
    {
        title: "excalidraw",
        // src: "https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
                src: "/excalidraw.png",

        description: "A real-time collaborative drawing tool where multiple users can join the same room and draw together on a shared canvas. Built with WebSockets for live updates and smooth multi-user interaction.",
        href: "/projects/excalidraw"
    },
    {
        title: "Zoom Clone",
        // src: "https://imgs.search.brave.com/vbkOZo6k6tkLv0s7KiQZBaokzMdoRyOduc0Us-2ydSY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9saDct/dXMuZ29vZ2xldXNl/cmNvbnRlbnQuY29t/L2RvY3N6L0FEXzRu/WGZPazVkX0pxb1FW/LWxYQzZvLTdySGIx/a1Y4X2p1NnJody00/YUstNzl1LXR3VXdF/SHNSekpBZml6cGhs/MDVWUUU5ak44UlVu/VFl6NmhkUjk2ZzJ3/UlFkZTJlUGEzT3NX/T1VnZk80VDRoNElS/SGZLRDRnSnVHcnFT/NlRjNHRwTnBpN2g2/ZU01OUduWE9BbVc4/dUNqdXduZnhkZ1E_/a2V5PTFsbmJuOC1B/ejJxeW9qc25aRnAx/RFE.jpeg",
                src: "/Zoom-Clone.png",

        description: "Zoom Clone app built with Next.js. You can create meeting rooms and add your friends or colleagues. It features seamless streaming with Stream, optimized performance with shadcn, and secure login with Clerk.",
        href: "/projects/Voom"
    },

]