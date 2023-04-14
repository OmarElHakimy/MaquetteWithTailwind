import {FC} from "react";

type Props = {
    rate :number,
    desc :string
};

const WhyUs :FC<Props> = (props) => {
    return (
        <div className='rounded-xl border-white border-2 border-opacity-5 p-8'>
            <div className='relative rounded-full bg-white w-[90px] h-[90px]'>
                <i className='absolute inset-y-5 inset-x-0 mx-auto bi bi-gift-fill text-5xl text-center text-zinc-900'></i>
            </div>
            <h1 className='my-4 font-semibold font-lg'>{props.rate}% Success Rate</h1>
            <p className='my-2 font-zinc-700 font-medium text-sm'>{props.desc}</p>
            <button className='mt-4 bg-yellow-500 rounded-full font-semibold text-black py-2 px-4 border-0 hover:bg-yellow-600'>Read More</button>
        </div>
    )
}
export default WhyUs;