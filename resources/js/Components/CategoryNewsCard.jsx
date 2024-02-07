import DateText from "./DateText";
import { Link } from "@inertiajs/react";

export default function CategoryNewsCard({ id, image, title, date }) {
    return (
        <Link className="lg:border border-gray-300 rounded-lg px-4 lg:px-0 overflow-hidden shadow-lg" href={`/berita/${id}`}>
            <div className="h-48">
                <img src={image} alt="Side Image" className="h-full w-full object-cover object-center" />
            </div>
            <div className="h-20 lg:px-4 px-0">
                <h2 className="text-lg my-2 leading-none line-clamp-2">{title}</h2>
                <DateText date={date} textColor="text-gray-600" textSize="text-sm" />
            </div>
        </Link>
    );
}
