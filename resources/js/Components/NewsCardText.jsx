import CategoryTag from "./CategoryTag"
import SideTitle from "./SideTitle"
import DateText from "./DateText"
import { Link } from "@inertiajs/react"

export default function BreakingNews({ id, category, title, date }) {
    return (
        <div className="flex px-4">
            <Link href={`/berita/${id}`}>
                <div className="w-full text-left pl-4">
                    <CategoryTag category={category} />
                    <SideTitle title={title} />
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </Link>
        </div>
    )
}
