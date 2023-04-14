import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav = () => {
    const router = useRouter();

    return(
        <ul className="my-8">
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/" ? "font-medium" : "font-semibold"}>Home</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/Attoneys" ? "font-medium" : "font-semibold"}>Attoneys</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/practiceArea" ? "font-medium" : "font-semibold"}>Practice Areas</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/About" ? "font-medium" : "font-semibold"}>About Us</Link>
            </li>
            <li className='my-8'>
            <Link href="/Contact" className='border-2 border-white border-solid px-4 py-2 hover:bg-white hover:text-black font-semibold'>Contact Now</Link>
            </li>
        </ul>
    )
}
export default Nav;