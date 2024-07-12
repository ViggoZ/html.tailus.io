import { SITE_SOCIAL_GITHUB, SITE_SOCIAL_LINKEDIN, SITE_SOCIAL_TWITTER, SITE_SOCIAL_YOUTUBE, SITE_BLOG, SITE_STORE } from '../const';
import { Link, Title } from './tailus-ui/typography';
import BrandLogo from './utilities/BrandLogo';

export default function Footer() {
    const links: { url: string; label: string }[] = [
        { url: SITE_BLOG, label: 'Blog' },
        { url: SITE_STORE, label: 'Store' },
        { url: 'https://tailus.gumroad.com/', label: 'Gumroad' }
    ];

    const templatesLinks: { url: string; label: string }[] = [
        { url: 'https://tailus.io/templates/ampire', label: 'Ampire' },
        { url: 'https://tailus.io/templates/radiant', label: 'Radiant' },
        { url: 'https://tailus.io/templates/astrolus', label: 'Astrolus' },
        { url: 'https://tailus.io/templates/', label: 'All templates' }
    ];

    const uikits: { url: string; label: string }[] = [
        { url: 'https://ui.tailus.io/get-started/introduction', label: 'React' },
        { url: '/', label: 'HTML' },
        { url: '#', label: 'Symfony' }
    ];

    const communityLinks: { url: string; label: string }[] = [
        { url: SITE_SOCIAL_GITHUB, label: 'GitHub' },
        { url: SITE_SOCIAL_YOUTUBE, label: 'Youtube' },
        { url: SITE_SOCIAL_TWITTER, label: 'X / Twitter' },
        { url: SITE_SOCIAL_LINKEDIN, label: 'LinkedIn' }
    ];

    const footer = [
        {
            title: 'Ressources',
            target: '_blank',
            links: links
        },
        {
            title: 'UI Kits',
            links: uikits,
            target: '_self'
        },
        {
            title: 'Templates',
            links: templatesLinks,
            target: '_self'
        },
        {
            title: 'Community',
            links: communityLinks,
            target: '_blank'
        }
    ];

    return (
        <footer className="mb-20">
            <div className="mx-auto max-w-xl space-y-16 px-6 sm:px-12">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-8 dark:border-gray-800">
                    <a href="/" aria-label="go home">
                        <BrandLogo />
                    </a>
                    <div className="flex gap-3">
                        <a href={SITE_SOCIAL_GITHUB} target="blank" aria-label="github" className="flex size-8 rounded-[--btn-border-radius] text-gray-600 *:m-auto hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                            </svg>
                        </a>
                        <a href={SITE_SOCIAL_TWITTER} target="blank" aria-label="twitter" className="flex size-8 rounded-[--btn-border-radius] text-gray-600 *:m-auto hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                            <svg className="size-5" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"></path>
                            </svg>
                        </a>
                        <a href={SITE_SOCIAL_YOUTUBE} target="blank" aria-label="medium" className="flex size-8 rounded-[--btn-border-radius] text-gray-600 *:m-auto hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500">
                            <svg className="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="m10 15l5.19-3L10 9zm11.56-7.83c.13.47.22 1.1.28 1.9c.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83c-.25.9-.83 1.48-1.73 1.73c-.47.13-1.33.22-2.65.28c-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44c-.9-.25-1.48-.83-1.73-1.73c-.13-.47-.22-1.1-.28-1.9c-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83c.25-.9.83-1.48 1.73-1.73c.47-.13 1.33-.22 2.65-.28c1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44c.9.25 1.48.83 1.73 1.73"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {footer.map((col) => (
                        <div>
                            <Title as="h3" className="text-sm" weight="medium">
                                {col.title}
                            </Title>
                            <ul className="mt-4 list-inside space-y-2">
                                {col.links.map((link) => (
                                    <li>
                                        <Link href={link.url} target={col.target} size="sm" intent="gray">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div>
                    <div className="-mb-2 flex flex-wrap gap-1 overflow-hidden text-sm font-medium text-gray-700 dark:text-gray-300">
                        Designed by Tailus UI in
                        <div className="flex items-start justify-center gap-2 text-center font-semibold text-gray-950 sm:gap-1 dark:text-white">
                            <div className="block">
                                <div className="block pb-2">DR Congo</div>
                                <div className="-mt-5 grow overflow-hidden">
                                    <svg aria-hidden="true" className="w-16" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" strokeWidth="4"></path>
                                        <defs>
                                            <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                                                <stop stopColor="#facc15"></stop>
                                                <stop offset="1" stopColor="#a855f7"></stop>
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
