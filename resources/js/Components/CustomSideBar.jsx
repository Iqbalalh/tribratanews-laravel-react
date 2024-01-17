'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiNewspaper, HiUser } from 'react-icons/hi';

export default function CustomSideBar() {
  return (
    <Sidebar className='h-screen' label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/posts" icon={HiNewspaper} labelColor="dark">
            Posts
          </Sidebar.Item>
          <Sidebar.Item href="/users" icon={HiUser}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
