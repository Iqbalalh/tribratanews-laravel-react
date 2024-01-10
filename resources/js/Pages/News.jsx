import NewsCarousel from "@/Components/NewsCarousel";
import BreakingNews from "@/Components/BreakingNews";
import NavBar from "@/Components/NavBar";
import { Head } from "@inertiajs/react";

export default function (props) {
    return (
        <div className="lg:flex lg:flex-col items-center justify-center">
            <Head title="Home" />
            <div className="header lg:w-10/12">
                <NavBar />
            </div>

            <div className="hl-row lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-3 mb-4 ">
                <div className="lg:col-span-2 md:col-span-1">
                    <NewsCarousel props={props}/>
                </div>

                <div className="lg:w-full lg:col-span-1 md:col-span-1">
                    <div className="grid grid-cols-1 md:grid-rows-4 gap-4">
                        {props.headline.slice(0, 5).map((item, index) => (
                            <a href="" key={index}>
                                <div className="w-full">
                                    <BreakingNews
                                        image={item.image}
                                        title={item.title}
                                        category={item.category}
                                        date={item.time}
                                    />
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            <div className="footer lg:w-10/12"></div>
        </div>
    );
}
