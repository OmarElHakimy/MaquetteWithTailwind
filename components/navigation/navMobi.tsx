import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav = () => {
    const router = useRouter();

    return(
        <ul className="my-8">
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Home</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/Attoneys" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Attoneys</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/practiceArea" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Practice Areas</Link>
            </li>
            <li className='my-1'>
                <Link href="/" className={router.pathname === "/About" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>About Us</Link>
            </li>
            <li className='my-8'>
            <Link href="/Contact" className='border-2 border-white border-solid px-4 py-2 hover:bg-yellow-500 hover:border-zinc-900 hover:text-black font-semibold'>Contact Now</Link>
            </li>
        </ul>
    )
}
export default Nav;