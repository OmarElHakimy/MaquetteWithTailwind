import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav = () => {
    const router = useRouter();

    return(
        <ul className="grid grid-flow-col lg:gap-x-4 gap-x-2">
            <li>
                <Link href="/" className={router.pathname === "/" ? "font-medium" : "font-semibold"}>Home</Link>
            </li>
            <li>
                <Link href="/" className={router.pathname === "/Attoneys" ? "font-medium" : "font-semibold"}>Attoneys</Link>
            </li>
            <li>
                <Link href="/" className={router.pathname === "/practiceArea" ? "font-medium" : "font-semibold"}>Practice Areas</Link>
            </li>
            <li>
                <Link href="/" className={router.pathname === "/About" ? "font-medium" : "font-semibold"}>About Us</Link>
            </li>
        </ul>
    )
}
export default Nav;