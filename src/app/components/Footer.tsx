import Link from 'next/link';

function Footer() {
    const links = [
        'xen.world',
        'xener.gy',
        'xenart.co',
        'xen.art',
        'xentzu.org',
        'supplyshark.io'
    ]

    return (
        <footer className={'fixed inset-x-0 bottom-0 relative flex overflow-x-hidden whitespace-nowrap bg-black'}>
            <div className={'py-2 animate-marquee'}>
                {links.map((link) => (
                    <SiteLink key={link} href={link} />
                ))}
            </div>
            <div className={'absolute top-0 py-2 animate-marquee2'}>
                {links.map((link) => (
                    <SiteLink key={link} href={link} />
                ))}
            </div>
        </footer>
    );
}

export default Footer;

interface SiteLinkProps {
    href: string;
}

function SiteLink({ href }: SiteLinkProps) {
    return (
        <span className={'text-3xl mx-16 text-gray-300 font-bebasNeue'}>
            <Link href={`https://${href}`}>
                {href}
            </Link>
        </span>
    );
}