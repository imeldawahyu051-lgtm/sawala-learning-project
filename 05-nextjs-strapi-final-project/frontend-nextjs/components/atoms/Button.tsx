
import Link from "next/link";

type ButtonProps = {
    href: string;
    children: React.ReactNode;
};

export default function Button({ href, children }: ButtonProps) {
    return (
        <Link
            href={href}
            className="inline-flex items-center justify-center rounded-lg bg-blue-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
        >
            {children}
        </Link>
    );
}
