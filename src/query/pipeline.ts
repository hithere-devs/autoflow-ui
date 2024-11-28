import axios from 'axios';

export interface PipelineData {
	id: string;
	name: string;
	owner: string;
	updatedAt: Date;
}

export interface Pipeline {
	id: string;
	name: string;
	owner: string;
	updatedAt: Date;
	nodes: any;
	edges: any;
}

export const getPipelines = async () => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/pipeline`,
			{
				headers: {
					Authorization: `Bearer abc123`,
				},
			}
		);

		// refine my data here and send it to ui
		const { data } = res.data;

		return [
			...data.map((pipeline: any) => ({
				id: pipeline.id,
				name: pipeline.name,
				owner: pipeline.user.email,
				updatedAt: new Date(pipeline.updatedAt),
			})),
		] as PipelineData[];
	} catch (error: any) {
		return Promise.reject(error.response?.data);
	}
};

export const getPipeline = async (id: string) => {
	try {
		const res = await axios.get(
			`${process.env.NEXT_PUBLIC_BACKEND_URL}/pipeline/${id}`,
			{
				headers: {
					Authorization: `Bearer abc123`,
				},
			}
		);

		// refine my data here and send it to ui
		const { data: pipeline } = res.data;

		return {
			id: pipeline.id,
			name: pipeline.name,
			owner: pipeline.user.email,
			updatedAt: new Date(pipeline.updatedAt),
			nodes: pipeline.nodes,
			edges: pipeline.node_edges,
		} as Pipeline;
	} catch (error: any) {
		return Promise.reject(error.response?.data);
	}
};
