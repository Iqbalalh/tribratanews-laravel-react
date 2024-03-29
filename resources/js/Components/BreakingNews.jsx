import CategoryTag from "./CategoryTag"
import SideTitle from "./SideTitle"
import DateText from "./DateText"
import { Link } from "@inertiajs/react"

export default function BreakingNews({ id, image, category, title, date }) {
    return (
        <Link href={`/berita/${id}`}>
            <div className="flex">
                <div className="w-1/3">
                    <img src={image} alt="Side Image" className="h-20 w-full object-cover" />
                </div>
                <div className="w-2/3 text-left pl-4">
                    <CategoryTag category={category} />
                    <SideTitle title={title} />
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </div>
        </Link>
    )
}

