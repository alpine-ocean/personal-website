import type { SiteConfig } from '../types';

const siteConfig: SiteConfig = {
    website: 'https://coreyjuarez.com',
    title: 'Corey Juarez',
    description: 'Mechanical engineer, sailor, writer.',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Now',
            href: '/now'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'GitHub',
            href: 'https://github.com/alpine-ocean'
        },
        {
            text: 'Email',
            href: 'mailto:coreyjuarez@gmail.com'
        }
    ],
    hero: {
        title: 'Engineer. Sailor. Writer.',
        text: "I'm a mechanical engineer working in hard tech — the kind of problems that require getting your hands dirty. Off hours I'm usually on the water or at a desk trying to put something into words. This site is where those threads come together.",
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
