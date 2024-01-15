import { Carousel } from 'flowbite-react';
import DateText from './DateText';
import { Link } from '@inertiajs/react';

export default function NewsCarousel({ props }) {
    return (
        <div className="px-4 h-48 md:h-64 lg:h-full img-carousel mb-4 overflow-hidden relative">
            <Carousel indicators={false}>
                {props.headline.slice(0, 5).map((item, index) => (
                        <div className="item bg-cover relative" key={index} style={{ backgroundImage: `url(${item.image})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white">
                                <Link href={`/berita/${item.id}`}>
                                    <h2 className='lg:text-2xl underline text-md pb-1'>{item.title}</h2>
                                    <DateText date={item.time} textColor="text-white" textSize="lg:text-md text-xs"/>
                                </Link>
                            </div>
                        </div>
                ))}
            </Carousel>
        </div>
    )
}
