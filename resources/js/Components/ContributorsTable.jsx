'use client';

import { Table } from 'flowbite-react';

export default function ContributorsTable({ contribution }) {
    return (
        <div className="overflow-x-auto">
            <Table hoverable>
                <Table.Head className='sticky top-0 z-10'>
                    <Table.HeadCell>User</Table.HeadCell>
                    <Table.HeadCell>Jumlah Post</Table.HeadCell>
                </Table.Head>
                <Table.Body className="divide-y">
                    {contribution.map((contributor, index) => (
                        <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {contributor.name}
                            </Table.Cell>
                            <Table.Cell>{contributor.total_news}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </div>
    );
}
