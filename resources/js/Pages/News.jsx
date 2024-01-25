import NewsCarousel from "@/Components/NewsCarousel";
import BreakingNews from "@/Components/BreakingNews";
import NavBar from "@/Components/NavBar";
import { Head } from "@inertiajs/react";
import NewsHeader from "@/Components/NewsHeader";
import NewsCardText from "@/Components/NewsCardText";
import CustomFooter from "@/Components/CustomFooter";
import SocialMediaContainer from "@/Components/SocialMediaContainer";
import ContentNewsCard from "@/Components/ContentNewsCard";

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
                            <div className="sm:col-span-1 px-4 lg:px-0" key={item.id}>
                                <BreakingNews
                                    id={item.id}
                                    image={item.image}
                                    title={item.title}
                                    category={item.category}
                                    date={item.created_at}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="hl-row lg:w-10/12 grid sm:grid-cols-2 sm:max-w-full lg:grid-cols-4 lg:mt-16 mt-8">
                <div className="lg:col-span-3 sm:col-span-1">
                    <NewsHeader tagline="OLAHRAGA" category='olahraga' className="lg:grid lg:grid-cols-2 grid-cols-1" color="red-900">
                        {(linkRef) => (
                            <div className="lg:flex lg:flex-row block">
                                <div className="lg:w-2/3">
                                    <NewsCarousel props={props} />
                                </div>
                                <div className="lg:w-1/3">
                                    <div className="grid grid-cols-1 gap-8 lg:gap-12">
                                        {props.sport_home.slice(0, 5).map((item) => (
                                            <div className="lg:col-span-1 px-4 lg:px-0" key={item.id}>
                                                <NewsCardText
                                                    id={item.id}
                                                    title={item.title}
                                                    date={item.created_at}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </NewsHeader>
                </div>
                <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5">
                    <SocialMediaContainer title="Instagram @polresta_bandarlampung" src="https://widget.taggbox.com/148528" textColor="#DD2A7B"/>
                </div>
            </div>

            <div className="hl-row lg:w-10/12 grid sm:grid-cols-1 sm:max-w-screen lg:grid-cols-4 mt-8 lg:mt-16">
                <div className="lg:col-span-3 sm:col-span-1">
                    <NewsHeader tagline="HUKUM" category='hukum' className="lg:grid lg:col-span-2" color="yellow-400">
                        {(linkRef) => (
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4">
                                {props.law_home.slice(0, 10).map((item) => (
                                    <div key={item.id} className="sm:col-span-1 gap-4">
                                        <ContentNewsCard
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            date={item.created_at}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </NewsHeader>
                </div>
                <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5">
                    <SocialMediaContainer title="Youtube" src="https://widget.taggbox.com/148533" textColor="#FF0000"/>
                </div>
            </div>

            <div className="hl-row lg:w-10/12 grid sm:grid-cols-2 sm:max-w-full lg:grid-cols-4 lg:mt-16 mt-8">
                <div className="lg:col-span-2 sm:col-span-1">
                    <NewsHeader tagline="SOSIAL BUDAYA" category='sosial-budaya' className="lg:grid lg:col-span-2" color="red-900">
                        {(linkRef) => (
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-4 gap-4">
                                {props.culture_home.slice(0, 8).map((item) => (
                                    <div key={item.id} className="sm:col-span-1 gap-4">
                                        <ContentNewsCard
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            date={item.created_at}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </NewsHeader>
                </div>
                <div className="lg:col-span-2 sm:col-span-1 lg:ml-5 mt-12 lg:mt-0">
                    <NewsHeader tagline="KESEHATAN" category='kesehatan' className="lg:grid lg:grid-cols-2 grid-cols-1" color="green-700">
                        {(linkRef) => (
                            <div className="lg:flex lg:flex-row block">
                                <div className="lg:w-2/3">
                                    <NewsCarousel props={props} />
                                </div>
                                <div className="lg:w-1/3">
                                    <div className="grid grid-cols-1 gap-8">
                                        {props.health_home.slice(0, 5).map((item) => (
                                            <div className="lg:col-span-1 px-4 lg:px-0" key={item.id}>
                                                <NewsCardText
                                                    id={item.id}
                                                    title={item.title}
                                                    date={item.created_at}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </NewsHeader>
                </div>
            </div>

            <div className="hl-row lg:w-10/12 grid sm:grid-cols-1 sm:max-w-screen lg:grid-cols-4 mt-8 lg:mt-16">
                <div className="lg:col-span-3 sm:col-span-1">
                    <NewsHeader tagline="KEAMANAN" category='keamanan' className="lg:grid lg:col-span-2" color="black">
                        {(linkRef) => (
                            <div className="grid sm:grid-cols-1 lg:grid-cols-2 lg:grid-rows-5 gap-4">
                                {props.security_home.slice(0, 10).map((item) => (
                                    <div key={item.id} className="sm:col-span-1 gap-4">
                                        <ContentNewsCard
                                            id={item.id}
                                            image={item.image}
                                            title={item.title}
                                            date={item.created_at}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </NewsHeader>
                </div>
                <div className="lg:col-span-1 sm:mt-8 lg:mt-0 md:mt-8 md:col-span-1 ml-5">
                    <SocialMediaContainer title="Twitter @PolrestaL" src="https://widget.taggbox.com/148558" textColor="#1DA1F2"/>
                </div>
            </div>

            <div className="footer lg:w-full mt-16 md:mt-20 lg:mt-24">
                <CustomFooter />
            </div>
        </div>
    );
}
