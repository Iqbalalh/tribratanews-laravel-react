import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import AdminSideBar from '@/Components/AdminSideBar';
import ContributorsTable from '@/Components/ContributorsTable';
import CategoryChart from '@/Components/CategoryChart';

export default function AdminDashboard({ auth, contribution, categorySums }) {
    const cardStyles = 'p-2 bg-white border rounded-md flex flex-col items-center justify-center';
    return (
        <div className="max-h-screen overflow-y-hidden">
            <AuthenticatedLayout
                user={auth.user}
                header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
            >
                <Head title="Admin" />
                <div className="flex max-h-screen">
                    <AdminSideBar />
                    <div className='mt-5 m-10 flex'>
                        <div className='max-w-lg'>
                            <div className="overflow-x-auto mt-5 mb-10" style={{ height: "30%" }}>
                                <ContributorsTable contribution={contribution}/>
                            </div>
                            <div>
                                <CategoryChart category1={categorySums[4].total} category2={categorySums[2].total} category3={categorySums[3].total} category4={categorySums[0].total} category5={categorySums[1].total}/>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 mt-5 mx-10 mb-20 gap-4">
                                {categorySums.map((category, index) => (
                                    <div key={index} className={cardStyles}>
                                        <h3 className="text-lg text-center font-semibold">{category.category}</h3>
                                        <p className="text-gray-600 text-center">{category.total}</p>
                                    </div>
                                ))}
                            </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </div>
    );
}
