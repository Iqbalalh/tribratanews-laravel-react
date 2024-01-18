import SideTitle from "./SideTitle"
import DateText from "./DateText"
import { Link } from "@inertiajs/react"

export default function BreakingNews({ id, title, date }) {
    return (
        <div className="flex">
            <Link href={`/berita/${id}`}>
                <div className="w-full text-left">
                    <SideTitle title={title} />
                    <DateText date={date} textColor="text-gray-600" textSize="text-xs" />
                </div>
            </Link>
        </div>
    )
}
