import { Carousel } from 'flowbite-react';
import DateText from './DateText';

export default function NewsCarousel({ props }) {
    return (
        <div className="px-4 h-48 md:h-64 lg:h-full img-carousel mb-4 overflow-hidden">
            <Carousel indicators={false}>
                {props.headline.slice(0, 5).map((item, index) => (
                    <div className="item" key={index}>
                        <div className="lg:p-4 p-2 absolute bg-black leading-none bg-opacity-50">
                            <h2 className='lg:text-2xl text-md pb-1 text-white'>{item.title}</h2>
                            <DateText date={item.time} textColor="text-white" textSize="lg:text-md text-xs"/>
                        </div>
                        <img src={item.image} alt="..." className="h-full w-full object-cover" />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}
