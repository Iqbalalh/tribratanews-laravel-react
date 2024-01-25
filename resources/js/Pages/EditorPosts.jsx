import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import EditorSideBar from '@/Components/EditorSideBar';
import PrimaryButton from '@/Components/PrimaryButton';

export default function EditorPosts({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />
            <div className="container flex">
                <EditorSideBar />
                    <div className="crud m-10">
                        <Link href='/editor-posts/create'>
                            <PrimaryButton>
                                Create
                            </PrimaryButton>
                        </Link>
                    </div>
            </div>
        </AuthenticatedLayout>
    );
}
