import Long from '../components/content/practiceImages/longImage';
import Short from '../components/content/practiceImages/shortImage';
import img1 from '../public/assets/images/img1.png'
import img2 from '../public/assets/images/img2.png'
import img3 from '../public/assets/images/img3.png'
import img4 from '../public/assets/images/img4.png'
import img5 from '../public/assets/images/img5.png'
import img6 from '../public/assets/images/img6.png'

const AreaOfPractice = () => {
    return (
        <div className='py-10 xl:py-20'>
            <h1 className='text-center font-semibold text-6xl mb-14'>Area Of Practice</h1>
            <div className='grid grid-cols-12'>
                <Long title="BUSINESS LAW" img={img1}/>
                <Short title="PARTNERSHIP LAW" img={img2}/>
                <Short title="REAL ESTATE LAW" img={img4}/>
                <Long title="BUSINESS LAW" img={img3}/>
                <Long title="ELDER ABUSE" img={img5}/>
                <Short title="LANDLORD DISPUTES" img={img6}/>
            </div>
        </div>
    );
}
export default AreaOfPractice;