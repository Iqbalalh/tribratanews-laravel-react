import NewsCarousel from "@/Components/NewsCarousel"
import BreakingNews from "@/Components/BreakingNews"
import NavBar from "@/Components/NavBar"
import CustomFooter from "@/Components/CustomFooter"

export default function () {
    return (
        <>
            <div className="header">
                <NavBar />
            </div>

            <div className="grid md:grid-cols-1 lg:grid-cols-3 mb-4">
                {/* NewsCarousel takes the full width on <= md screens */}
                <div className="lg:col-span-2 md:col-span-1">
                    <NewsCarousel />
                </div>

                {/* BreakingNews components */}
                <div className="lg:col-span-1 md:col-span-1">
                    <div className="grid grid-cols-1 md:grid-rows-4 gap-4 h-full pr-4">
                        <div className="">
                            <BreakingNews />
                        </div>
                        <div className="">
                            <BreakingNews />
                        </div>
                        <div className="">
                            <BreakingNews />
                        </div>
                        <div className="">
                            <BreakingNews />
                        </div>
                        <div className="">
                            <BreakingNews />
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <CustomFooter />
            </div>
        </>
    );
}
