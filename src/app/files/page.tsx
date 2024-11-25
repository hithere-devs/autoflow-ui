'use client';
import { DataTable } from '@/components/table';
import { useRouter } from 'next/navigation';
import React from 'react';

const Files = () => {
	const files = [
		{
			id: 'f1',
			name: 'File 1',
			owner: 'Azhar',
			updatedAt: new Date('2024-03-10'),
		},
		{
			id: 'f2',
			name: 'File 2',
			owner: 'Ayan',
			updatedAt: new Date('2024-11-10'),
		},
	];

	const router = useRouter();

	const handleEdit = (file: (typeof files)[0]) => {
		// navigate to /files/:id
		router.replace(`/files/${file.id}`);
	};

	const handleDelete = (file: (typeof files)[0]) => {
		console.log('Delete file:', file);
	};

	const handleSelectionChange = (selected: typeof files) => {
		console.log('Selected files:', selected);
	};
	return (
		<div className='p-6'>
			<h1 className='mb-4 ml-2 text-2xl font-semibold text-foreground'>
				Files
			</h1>

			<DataTable
				data={files}
				onEdit={handleEdit}
				onDelete={handleDelete}
				onSelect={handleSelectionChange}
				onRowClick={handleEdit}
			/>
		</div>
	);
};

export default Files;
