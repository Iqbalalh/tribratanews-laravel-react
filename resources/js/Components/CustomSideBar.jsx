'use client';

import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiNewspaper, HiUser } from 'react-icons/hi';

export default function CustomSideBar() {
  return (
    <Sidebar label="Default sidebar example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiNewspaper} labelColor="dark">
            Posts
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
