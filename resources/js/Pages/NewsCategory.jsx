import { Pagination } from 'flowbite-react';
import { useState } from 'react';
import { Head, usePage, Link } from "@inertiajs/react";
import NavBar from "@/Components/NavBar";
import CustomFooter from "@/Components/CustomFooter";
import CategoryNewsCard from '@/Components/CategoryNewsCard';

export default function NewsCategory({ kategoriCategory, kategori, headline }) {
    console.log(kategoriCategory)
    const headlinesArray = Array.isArray(headline) ? headline : [headline];
    const slicedHeadlines = headlinesArray.slice(0, 5);
    const [currentPage, setCurrentPage] = useState(kategoriCategory.current_page);

    const onPageChange = (page) => {
        setCurrentPage(page);
        window.location.assign(`${kategoriCategory.path}?page=${page}`);
    };

    return (
        <div className="lg:flex lg:flex-col items-center justify-center" style={{ overflowX: 'hidden' }}>
            <Head title={kategori} />
            <div className="header lg:w-full lg:fixed top-0 z-50 bg-white">
                <NavBar props={{ headline: slicedHeadlines }} />
            </div>

            <div className="lg:w-10/12 lg:mt-40 b-4 gap-4 grid lg:grid-cols-3 lg:grid-rows-5 grid-cols-1 flex items-center justify-center">
                {kategoriCategory.data.map((item) => (
                    <CategoryNewsCard
                    key={item.id}
                    id={item.id}
                    image={`/storage/${item.image.split('/').pop()}`}
                    title={item.title}
                    date={item.created_at}
                    />
                ))}
            </div>

            {kategoriCategory.last_page > 1 && (
                <div className="flex overflow-x-auto sm:justify-center lg:mt-16">
                    <Pagination className='sm:max-w-screen'
                        currentPage={currentPage}
                        totalPages={kategoriCategory.last_page}
                        onPageChange={onPageChange}
                        showIcons
                    />
                </div>
            )}

            <div className="footer lg:w-full lg:mt-24">
                <CustomFooter />
            </div>
        </div>
    );
}
