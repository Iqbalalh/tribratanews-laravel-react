import DateText from "./DateText";
import NewsHeader from "./NewsHeader";
import { Link } from "@inertiajs/react";

export default function CategoryNewsCard({ id, image, title, date }) {
    return (
        <Link href={`/berita/${id}`}>
            <div className="px-4">
                <div className="h-48">
                    <img src={image} alt="Side Image" className="h-full w-full object-cover" />
                </div>
                <div className="h-20">
                    <h2 className="text-lg my-2 leading-none">{title}</h2>
                    <DateText date={date} textColor="text-gray-600" textSize="text-sm" />
                </div>
            </div>
        </Link>
    );
}
