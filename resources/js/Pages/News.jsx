import NewsCarousel from "@/Components/NewsCarousel"
import BreakingNews from "@/Components/BreakingNews"
import NavBar from "@/Components/NavBar"

export default function () {
    return (
        <>
            <div className="header">
                <NavBar />
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 mb-4">
                <div class="lg:col-span-2 md:col-span-2">
                    <NewsCarousel />
                </div>

                <div class="lg:col-span-1 md:col-span-2">
                    <div class="grid grid-cols-1 md:grid-rows-4 gap-4 h-full pr-4">
                        <div class="bg-gray-200"><BreakingNews /></div>
                        <div class="bg-gray-200"><BreakingNews /></div>
                        <div class="bg-gray-200"><BreakingNews /></div>
                        <div class="bg-gray-200"><BreakingNews /></div>
                        <div class="bg-gray-200"><BreakingNews /></div>
                    </div>
                </div>
            </div>


            <div className="footer">

            </div>
        </>
    )
}
