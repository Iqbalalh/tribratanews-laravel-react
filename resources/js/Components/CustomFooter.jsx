import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup } from "flowbite-react";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

export default function CustomFooter() {
    return (
        <Footer className="flex flex-col justify-between bg-gray-50">
            <div className="flex items-end">
                <img
                    src="/assets/logo footer.png"
                    className="w-full max-w-screen-md lg:max-w-screen-lg max-h-50"
                />
            </div>
            <div className="px-4 mt-4 space-x-5 sm:flex sm:items-center sm:justify-center">
                <FooterLinkGroup className="list-none gap-5 mb-5 justify-center ">
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible mr-0"
                        href="https://humas.polri.go.id/category/satwil/polda-lampung/"
                    >
                        Polda Lampung
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible mr-0"
                        href="https://humas.polri.go.id/category/satwil/polda-lampung/polres-lampung-utara/"
                    >
                        Polres Lampung Utara
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible mr-0"
                        href="https://humas.polri.go.id/category/satwil/polda-lampung/polres-lampung-tengah/"
                    >
                        Polres Lampung Tengah
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible mr-0"
                        href="https://humas.polri.go.id/category/satwil/polda-lampung/polres-lampung-barat/"
                    >
                        Polres Lampung Barat
                    </FooterLink>
                </FooterLinkGroup>
            </div>
            <div className="w-full bg-red-900 px-4 lg:px-36 py-6 mt-2 overflow-x-auto justify-end">
                <div className="flex flex-col sm:flex-row justify-between">
                    <FooterCopyright
                        className="text-white text-sm md:visible lg:text-lg mb-4 sm:mb-0"
                        href="https://humas.polri.go.id/category/satwil/polda-lampung/"
                        by="Bidhumas Polda Lampung"
                        year={2024}
                    />
                    <div className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:space-x list-none">
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="https://tribratanews.polri.go.id/tentang-kami"
                        >
                            Tentang Kami
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="https://tribratanews.polri.go.id/redaksi"
                        >
                            Redaksi
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="https://tribratanews.polri.go.id/pedoman-media-siber"
                        >
                            Pedoman Media Siber
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="https://tribratanews.polri.go.id/kontak-kami"
                        >
                            Kontak Kami
                        </FooterLink>
                    </div>

                    <div className="flex items-center space-x-5">
                        <FooterIcon
                            className="text-white"
                            href="https://www.facebook.com/humaspoldalampung?mibextid=ZbWKwL"
                            icon={IoLogoFacebook}
                        />
                        <FooterIcon
                            className="text-white"
                            href="https://www.instagram.com/humas_poldalampung?igsh=NnBtc21udXh0dDNz"
                            icon={AiFillInstagram}
                        />
                        <FooterIcon
                            className="text-white"
                            href="https://www.tiktok.com/@humaspoldalampung?_t=8iqtmZj54PY&_r=1"
                            icon={IoLogoTiktok}
                        />
                        <FooterIcon
                            className="text-white"
                            href="https://youtube.com/@POLDALAMPUNG?si=MwqbMS8bQYIbgy-w"
                            icon={IoLogoYoutube}
                        />
                    </div>
                </div>
            </div>
        </Footer>
    );
}
