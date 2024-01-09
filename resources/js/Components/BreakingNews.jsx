import CategoryTag from "./CategoryTag"

export default function BreakingNews() {
    return (
        <div class="flex items-center">
            <div class="w-1/2">
                <img src="assets/twitter.png" alt="Side Image" class="w-32" />
            </div>
            <div class="w-1/2 px-4">
                <CategoryTag category="Nasional" />
                <h2 class="text-xl font-bold mb-2">Title Here</h2>
                <p class="text-sm text-gray-500 mb-1">Date Here</p>
            </div>
        </div>
    )
}
