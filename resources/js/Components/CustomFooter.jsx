import {
    Footer,
    FooterCopyright,
    FooterIcon,
    FooterLink,
    FooterLinkGroup,
} from "flowbite-react";
import { IoLogoInstagram, IoLogoFacebook, IoLogoYoutube } from "react-icons/io";
import { IoLogoTiktok } from "react-icons/io5";

export default function CustomFooter() {
    return (
        <Footer className="flex flex-col justify-center min-h-screen">
            <div className="flex items-end min-h-screen">
                <img
                    src="/assets/footer.png"
                    className="w-full max-w-screen-md lg:max-w-screen-lg max-h-50"
                />
            </div>
            <div className="px-4 mt-4 space-x-3 sm:flex sm:items-center sm:justify-end">
                <FooterLinkGroup className="list-none">
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible"
                        href="#"
                    >
                        Polda Lampung
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible"
                        href="#"
                    >
                        Polres Lampung Utara
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible"
                        href="#"
                    >
                        Polres Lampung Tengah
                    </FooterLink>
                    <FooterLink
                        className="text-lg font-bold text-blue-900 md:visible"
                        href="#"
                    >
                        Polres Lampung Barat
                    </FooterLink>
                </FooterLinkGroup>
            </div>
            <div className="w-full bg-red-900 px-4 py-6 overflow-x-auto whitespace-nowrap">
                <div className="flex flex-col sm:flex-row justify-between">
                    <FooterCopyright
                        className="text-white text-sm md:visible lg:text-lg mb-4 sm:mb-0"
                        href="#"
                        by="Bidhumas Polda Lampung"
                        year={2024}
                    />
                    <div className="flex flex-col mb-4 sm:mb-0 sm:flex-row sm:space-x-5 list-none">
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="/tentang-kami"
                        >
                            Tentang Kami
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="/redaksi"
                        >
                            Redaksi
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:text-base lg:text-lg"
                            href="/pedoman-media-siber"
                        >
                            Pedoman Media Siber
                        </FooterLink>
                        <FooterLink
                            className="text-white text-sm md:visible lg:text-lg"
                            href="/kontak-kami"
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
                            icon={IoLogoInstagram}
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
