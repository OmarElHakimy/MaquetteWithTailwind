import Link from 'next/link';
import {useRouter} from 'next/router';

const Nav = () => {
    const router = useRouter();

    return(
        <div className="flex justify-left xl:justify-center">
            <ul className="xl:grid xl:grid-flow-col lg:gap-x-4 gap-2">
                <li className='xl:my-0 my-2'>
                    <Link href="/" className={router.pathname === "/" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Home</Link>
                </li>
                <li className='xl:my-0 my-2'>
                    <Link href="/" className={router.pathname === "/Attoneys" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Attoneys</Link>
                </li>
                <li className='xl:my-0 my-2'>
                    <Link href="/" className={router.pathname === "/practiceArea" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>Practice Areas</Link>
                </li>
                <li className='xl:my-0 my-2'>
                    <Link href="/" className={router.pathname === "/About" ? "font-medium hover:text-lg hover:text-yellow-500" : "font-semibold hover:text-lg hover:text-yellow-500"}>About Us</Link>
                </li>
            </ul>
        </div>
    )
}
export default Nav;