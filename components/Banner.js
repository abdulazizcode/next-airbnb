import Image from 'next/image';
import bannerImage from '../public/images/banner.png';

function Banner() {
    return (
        <div className='relative h-[600px]'>
            <Image
                src={bannerImage}
                alt='Banner hero'
                layout='fill'
                objectFit='cover'
                className='pt-20'
            />
            <div className='absolute top-1/2 w-full text-center'>
                <p className=' text-purple-500 font-sans md:font-serif text-3lg font-bold  sm:text-lg '>
                    Not sure where to go ? Perfect.
                </p>
                <button className='text-2xl text-purple-500 bg-white px-12 py-5 shadow-md rounded-full font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
                    Im flexible
                </button>
            </div>
        </div>
    );
}

export default Banner;
