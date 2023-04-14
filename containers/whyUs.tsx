import {FC} from 'react';
// import WhyUsLighter from '../components/content/whyUs/whyUsLighter';
// import WhyUsDarker from '../components/content/whyUs/whyUsDarker';
import WhyUsComp from '../components/content/whyUs/whyUs';
import Type from '../models/whyUs';

type Props = {
    whyUs: Type[]
}

const WhyUs :FC<Props> = (props) => {
    return (
        <div className='py-10 xl:py-20'>
            <p className='text-center mb-14 font-semibold text-6xl'>Why Choose Us ?</p>
            <div className='grid grid-cols-12'>
                {
                    props.whyUs.map( data => (
                        <div key={data.id} className='col-span-12 lg:col-span-6 xl:col-span-4 my-2 mx-2 odd:bg-inherit even:bg-zinc-950 rounded-xl'>
                            <WhyUsComp rate={data.rate} desc={data.description} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default WhyUs;