import CategoryTag from "./CategoryTag"
import SideTitle from "./SideTitle"
import DateText from "./DateText"

export default function BreakingNews() {
    return (
        <div class="flex items-center">
            <div class="w-1/3">
                <img src="assets/twitter.png" alt="Side Image" class="full" />
            </div>
            <div class="w-2/3 px-4">
                <CategoryTag category="Nasional" />
                <SideTitle title="Judul Berita ini akan sangat panjang" />
                <DateText date="10 Januari 2024" />
            </div>
        </div>
    )
}
