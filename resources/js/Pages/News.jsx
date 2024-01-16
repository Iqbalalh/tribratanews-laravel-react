import NewsCarousel from "@/Components/NewsCarousel";
import BreakingNews from "@/Components/BreakingNews";
import NavBar from "@/Components/NavBar";
import { Head } from "@inertiajs/react";
import NewsHeader from "@/Components/NewsHeader";
import NewsCardText from "@/Components/NewsCardText";
import CustomFooter from "@/Components/CustomFooter";

export default function (props) {
    return (
        <div
            className="lg:flex lg:flex-col items-center justify-center"
            style={{ overflowX: "hidden" }}
        >
            <Head title="Home" />
            <div className="header lg:w-full lg:fixed top-0 z-50 bg-white justify-center">
                <NavBar props={props} />
            </div>
            <div className="hl-row lg:w-10/12 lg:mt-40 grid md:grid-cols-2 lg:grid-cols-3 mb-4">
                <div className="lg:col-span-2 md:col-span-1">
                    <NewsCarousel props={props} />
                </div>
                <div className="lg:w-full lg:col-span-1 md:col-span-1">
                    <div className="grid grid-cols-1 md:grid-rows-4 gap-4">
                        {props.headline.slice(0, 5).map((item) => (
                            <div className="w-full" key={item.id}>
                                <BreakingNews
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    category={item.category}
                                    date={item.time}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hl-row lg:w-10/12 grid md:grid-cols-2 lg:grid-cols-4 lg:mt-16">
                <div className="lg:col-span-3">
                    <NewsHeader tagline="OLAHRAGA" category='olahraga' className="grid lg:col-span-2">
                        {(linkRef) => (
                                <div className="lg:flex lg:flex-row lg:col-span-2">
                                    <div className="lg:w-2/3">
                                        <NewsCarousel props={props} />
                                    </div>
                                    <div className="lg:w-1/3 lg:col-span-1 md:col-span-1">
                                        <div className="grid grid-cols-1 md:grid-rows-4 gap-4">
                                            {props.sport_home.slice(0, 5).map((item) => (
                                                <div className="w-full" key={item.id}>
                                                    <NewsCardText
                                                        id={item.id}
                                                        title={item.title}
                                                        category={item.category}
                                                        date={item.time}
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </NewsHeader>
                </div>

                <div className="lg:col-span-1 sm:mt-8 md:col-span-1">
                    <NewsCarousel props={props} />
                </div>
            </div>

            <div className="footer lg:w-full">
                <CustomFooter />
            </div>
        </div>
    );
}
