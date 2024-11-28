'use client';
import { DataTable } from '@/components/table';
// import React from 'react';
import Flow from './react-flow';
import { useRouter } from 'next/navigation';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { Suspense } from 'react';
import { getPipelines, PipelineData } from '@/query/pipeline';

const Pipelines = () => {
	// const pipelines = [
	// 	// {
	// 	// 	id: 'p1',
	// 	// 	name: 'Pipeline 1',
	// 	// 	owner: 'Azhar',
	// 	// 	updatedAt: new Date('2024-03-10'),
	// 	// },
	// 	// {
	// 	// 	id: 'p2',
	// 	// 	name: 'Pipeline 2',
	// 	// 	owner: 'Ayan',
	// 	// 	updatedAt: new Date('2024-11-10'),
	// 	// },
	// 	// ... more pipelines
	// ];

	// fetch the pipelines data
	const {
		data: pipelines,
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['pipelines'],
		queryFn: getPipelines,
		retry: 1,
	});

	const router = useRouter();

	const handleEdit = (pipeline: PipelineData) => {
		// navigate to /pipelines/:id
		router.replace(`/pipelines/${pipeline.id}`);
	};

	const handleDelete = (pipeline: PipelineData) => {
		console.log('Delete pipeline:', pipeline);
	};

	const handleSelectionChange = (selected: PipelineData[]) => {
		console.log('Selected pipelines:', selected);
	};

	if (isLoading) return <div>Loading...</div>;

	if (isError) return <div>{JSON.stringify(error)}</div>;

	return (
		<div className='p-6'>
			<h1 className='mb-4 ml-2 text-2xl font-semibold text-foreground'>
				Pipelines
			</h1>
			<DataTable
				data={pipelines!}
				onEdit={handleEdit}
				onDelete={handleDelete}
				onSelect={handleSelectionChange}
				onRowClick={handleEdit}
			/>
		</div>
	);
};

export default Pipelines;
