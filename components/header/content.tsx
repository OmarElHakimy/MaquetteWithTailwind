import Input from './input/input';

const Content = () => {

    return (
        <div className='py-4 grid col-span-12 xl:col-span-7 text-white text-center xl:text-start my-auto order-2 xl:order-1'>
            <div className='mb-4'>
                <div className='xl:text-start text-center'>
                    <p className='font-medium leading-tight text-7xl xl:my-4 my-2'>You don't have to</p>
                    <p className='font-semibold leading-tight text-7xl xl:my-4 my-2'>Fight them Alone.</p>
                </div> 
            </div>
            <p className='text-zinc-600 font-medium text-lg xl:text-start text-center mb-8'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <div className='mt-2 mx-0 sm:mx-auto xl:ml-0'>
               <Input/> 
            </div>
            
        </div>
    )
}
export default Content;