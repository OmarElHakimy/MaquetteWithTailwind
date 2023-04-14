// import {useState, useEffect} from 'react';
import Content from '../components/header/content';
import Image from '../components/header/profil';

const Header = () => {
    
    // let screen = 0;
    // if(typeof window !== 'undefined'){
    //     screen = window.innerWidth
    // }

    // const [width, setWidth] = useState<number>(screen);
    // const [isSmall, setIsSmall] = useState<boolean>(false);

    // useEffect(() => {
    //     const onResize = () => setWidth(window.innerWidth);
    //     window.addEventListener("resize", onResize);
    //     return () => {
    //         window.removeEventListener('resize', onResize)
    //     }
    // }, [setWidth]);

    // useEffect(() => {
    //     if(width < 992){
    //         setIsSmall(true);
    //     }else{
    //         setIsSmall(false)
    //     }
    // }, [width]);
    
    return(
            <div className='grid grid-cols-12 py-10 xl:py-20 bg-black-200'>
                <Content/>
                <Image/>
            </div>
        
    );
}
export default Header;