import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import CustomSideBar from '@/Components/AdminSideBar';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState, useEffect } from 'react';
import NewsCreateModal from '@/Components/NewsCreateModal';

export default function AdminPosts({ auth }) {
    const [showCreateModal, setShowCreateModal] = useState(false);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />
            <div className="container flex">
                <CustomSideBar />
                    <div className="crud m-10">
                            <PrimaryButton onClick={() => setShowCreateModal(true)}>
                                Create
                            </PrimaryButton>
                    </div>
                    <NewsCreateModal showModal={showCreateModal} setShowModal={setShowCreateModal}/>
            </div>
        </AuthenticatedLayout>
    );
}
