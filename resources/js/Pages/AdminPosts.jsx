'use client';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import AdminSideBar from '@/Components/AdminSideBar';
import PrimaryButton from '@/Components/PrimaryButton';
import { useState } from 'react';
import NewsCreateModal from '@/Components/NewsCreateModal';
import NewsUpdateModal from '@/Components/NewsUpdateModal';
import { Table, ToggleSwitch, Pagination, ButtonGroup, Button } from 'flowbite-react';
import { MdDelete, MdRemoveRedEye, MdEditSquare } from "react-icons/md";
import DateText from '@/Components/DateText';
import { Inertia } from '@inertiajs/inertia';
import NewsViewModal from '@/Components/NewsViewModal';

export default function AdminPosts({ auth, adminView }) {
    const [showCreateModal, setShowCreateModal] = useState(false);
    const [showViewModal, setShowViewModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [editPost, setEditPost] = useState(null);
    const [currentPage, setCurrentPage] = useState(adminView.current_page);

    const onPageChange = (page) => {
        setCurrentPage(page);
        window.location.assign(`${adminView.path}?page=${page}`);
    };

    const handleUpdatePublishStatus = (postId, currentPublishStatus) => {
        const newPublishStatus = !currentPublishStatus;

        Inertia.post(`/api/update-publish-status/${postId}`, {
            publishStatus: newPublishStatus,
        }).then((response) => {
            console.log('Publish status updated successfully:', response);
        }).catch((error) => {
            console.error('Error updating publish status:', error);
        });
    };

    const handleEditPost = (post) => {
        setEditPost(post);
        setShowEditModal(true);
    };

    const handleViewPost = (post) => {
        setEditPost(post);
        setShowViewModal(true);
    };

    const handleDeleteNews = (postId) => {
        Inertia.post(`/api/delete-news/${postId}`, {})
            .then((response) => {
                console.log('Deleted successfully:', response);
            })
            .catch((error) => {
                console.error('Error deleting News:', error);
            });
    };

    return (
        <div className="max-h-screen overflow-y-hidden">
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Posts</h2>}
        >
            <Head title="Posts" />
            <div className="flex max-h-screen">
                <AdminSideBar />
                    <div className="crud mt-5 m-10">
                        <PrimaryButton onClick={() => setShowCreateModal(true)}>
                            Create
                        </PrimaryButton>
                        <div className="overflow-x-auto mt-5" style={{ height: "78%" }}>
                            <Table hoverable className='min-w-full' style={{ width: '100%', borderCollapse: 'collapse' }}>
                                <Table.Head className="sticky top-0 z-10">
                                <Table.HeadCell style={{ width: "5%" }}>Id</Table.HeadCell>
                                <Table.HeadCell style={{ width: "35%" }}>Judul</Table.HeadCell>
                                <Table.HeadCell style={{ width: "10%" }}>Kategori</Table.HeadCell>
                                <Table.HeadCell style={{ width: "10%" }}>Author</Table.HeadCell>
                                <Table.HeadCell style={{ width: "15%" }}>Tanggal</Table.HeadCell>
                                <Table.HeadCell style={{ width: "10%" }}>Status</Table.HeadCell>
                                <Table.HeadCell style={{ width: "15%" }}>Aksi</Table.HeadCell>
                                </Table.Head>
                                <Table.Body className="divide-y">
                                    {adminView.data.map((post) => (
                                        <Table.Row key={post.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                            <Table.Cell style={{ width: "5%" }}>{post.id} </Table.Cell>
                                            <Table.Cell style={{ width: "35%" }}>{post.title}</Table.Cell>
                                            <Table.Cell style={{ width: "10%" }}>{post.category}</Table.Cell>
                                            <Table.Cell style={{ width: "10%" }}>{post.author.name}</Table.Cell>
                                            <Table.Cell style={{ width: "15%" }}><DateText date={post.created_at} textColor="text-gray-600" textSize="text-xs" /></Table.Cell>
                                            <Table.Cell style={{ width: "15%" }}>
                                                <div className="flex gap-2 items-center">
                                                    {post.publish_status === true ? "TAYANG" : "DRAFT"}
                                                    <ToggleSwitch
                                                        checked={post.publish_status}
                                                        onChange={() => handleUpdatePublishStatus(post.id, post.publish_status)}
                                                    />
                                                </div>
                                            </Table.Cell>
                                            <Table.Cell style={{ width: "20%" }}>
                                                <div className="flex">
                                                    <Button.Group>
                                                        <Button
                                                            color="gray"
                                                            onClick={() => handleViewPost(post)}>
                                                            <MdRemoveRedEye className="h-5 w-5" />
                                                        </Button>
                                                        <Button
                                                            color="gray"
                                                            onClick={() => handleEditPost(post)} >
                                                            <MdEditSquare className="h-5 w-5" />
                                                        </Button>
                                                        <Button
                                                            color="gray"
                                                            onClick={() => handleDeleteNews(post.id)}>
                                                            <MdDelete className="h-5 w-5" />
                                                        </Button>
                                                    </Button.Group>
                                                </div>
                                            </Table.Cell>
                                        </Table.Row>
                                    ))}
                                </Table.Body>
                            </Table>
                        </div>
                        <div className="flex overflow-x-auto sm:justify-center">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={adminView.last_page}
                                onPageChange={onPageChange}
                                showIcons
                            />
                        </div>
                    </div>
                    <NewsCreateModal showModal={showCreateModal} setShowModal={setShowCreateModal}/>
                    {showViewModal && <NewsViewModal showModal={showViewModal} setShowModal={setShowViewModal} payload={editPost}/>}
                    {showEditModal && <NewsUpdateModal showModal={showEditModal} setShowModal={setShowEditModal} payload={editPost} />}
            </div>
        </AuthenticatedLayout>
        </div>
    );
}
