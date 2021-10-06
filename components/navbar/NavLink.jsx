import Link from 'next/link'

export default function NavLink({ route, title }) {
    return (
        <Link href={`${route}`} >
            <a className="hover:text-sec-100 px-2 py-1">
                {title}
            </a>
        </Link>
    )
}
