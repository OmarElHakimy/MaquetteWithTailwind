import {useState} from 'react'
import Image from 'next/image'
import Nav from '../components/navigation/nav'
import logo from '../public/assets/images/logo.png'
import Link from 'next/link'
import NavMobi from '../components/navigation/navMobi';

const Navigation = () => {

    const [isDisplay, setIsDisplay] = useState<boolean>(false)

    const onClickHandler = () => {
        if(isDisplay){
            setIsDisplay(false);
        }else{
            setIsDisplay(true);
        }
    }

    return(
        <>
        <div className="grid grid-cols-2 xl:grid-cols-3">
            <div>
                <Image src={logo} alt="eight-id" width={176} height={41}/>
            </div>
            <div className='hidden xl:flex items-center justify-center'>
                <Nav/>
            </div>
            <div className='hidden xl:flex items-center justify-end'>
                <Link href="/Contact" className='border-2 border-white border-solid px-4 py-2 hover:bg-white hover:text-black font-semibold'>Contact Now</Link>
            </div>
            <div className='flex xl:hidden justify-end items-center'>
                <i className='bi bi-list text-4xl hover:cursor-pointer hover:scale-110' onClick={onClickHandler}></i>
            </div>
        </div>
        {
            isDisplay
            &&
            <div className='translation duration-500 ease-in-out translation-y-100 '>
                <NavMobi/>
            </div>
        }
        </>
    )
}
export default Navigation;