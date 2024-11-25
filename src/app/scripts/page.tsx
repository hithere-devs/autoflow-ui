'use client';

import { DataTable } from '@/components/table';
import { useRouter } from 'next/navigation';
import React from 'react';

const Scripts = () => {
	const scripts = [
		{
			id: 's1',
			name: 'Script 1',
			owner: 'Azhar',
			updatedAt: new Date('2024-03-10'),
		},
		{
			id: 's2',
			name: 'Script 2',
			owner: 'Ayan',
			updatedAt: new Date('2024-11-10'),
		},
	];

	const router = useRouter();

	const handleEdit = (pipeline: (typeof scripts)[0]) => {
		// navigate to /scripts/:id
		router.replace(`/scripts/${pipeline.id}`);
	};

	const handleDelete = (pipeline: (typeof scripts)[0]) => {
		console.log('Delete pipeline:', pipeline);
	};

	const handleSelectionChange = (selected: typeof scripts) => {
		console.log('Selected pipelines:', selected);
	};
	return (
		<div className='p-6'>
			<h1 className='mb-4 ml-2 text-2xl font-semibold text-foreground'>
				Scripts
			</h1>

			<DataTable
				data={scripts}
				onEdit={handleEdit}
				onDelete={handleDelete}
				onSelect={handleSelectionChange}
				onRowClick={handleEdit}
			/>
		</div>
	);
};

export default Scripts;
