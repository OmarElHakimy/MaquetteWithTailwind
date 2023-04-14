import Image from 'next/image';
import backProfil from '../../public/assets/images/backProfil.png';
import profil from '../../public/assets/images/profil.png';

const Profil = () => {

    return (
        <div className='py-4 grid col-span-12 xl:col-span-5 order-1 xl:order-2'>
            <div style={{width: "100%", display: "block"}}>
                <div className='relative w-[300px] h-[360px] md:w-[400px] md:h-[460px] mx-auto xl:mr-0'>
                    <Image src={backProfil} alt='back profil' width={400} height={400} className='absolute bottom-0'/>
                    <Image src={profil} alt='profil' fill objectFit='contain' className='absolute' priority={true}/>
                </div>
            </div>
        </div>
    )
}
export default Profil;