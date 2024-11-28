'use client';
import Flow from '../react-flow';

import { useQuery } from '@tanstack/react-query';
import { getPipeline } from '@/query/pipeline';
import { useParams, useSearchParams } from 'next/navigation';

export default function Page() {
	const { id } = useParams();
	const pipelineId = id[0];

	// using this pipeline fetch all the pipeline data from backend and pass that in the flow component

	return <Flow id={pipelineId} />;
}
