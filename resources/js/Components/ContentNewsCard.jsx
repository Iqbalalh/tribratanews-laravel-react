import SideTitle from "./SideTitle"
import DateText from "./DateText"
import { Link } from "@inertiajs/react"

export default function ContentNewsCard({ id, image, title, date }) {
    return (
        <Link href={`/berita/${id}`}>
            <div className="flex px-4">
                <div className="w-1/3">
                    <img src={image} alt="Side Image" className="h-20 w-full object-cover" />
                </div>
                <div className="w-2/3 text-left pl-4">
                    <SideTitle title={title} />
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </div>
        </Link>
    )
}
