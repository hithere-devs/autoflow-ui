'use client';

import { useCallback } from 'react';
import {
	Background,
	Controls,
	MiniMap,
	ReactFlow,
	addEdge,
	useNodesState,
	useEdgesState,
	type OnConnect,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';

import { initialNodes, nodeTypes, type CustomNodeType } from './nodes';
import { initialEdges, edgeTypes, type CustomEdgeType } from './edges';
import Toolbar from './toolbar';
import { useQuery } from '@tanstack/react-query';
import { getPipeline } from '@/query/pipeline';

export default function Flow({ id }: { id: string }) {
	const gridSize = 15;
	const [nodes, , onNodesChange] = useNodesState<CustomNodeType>(initialNodes);
	const [edges, setEdges, onEdgesChange] =
		useEdgesState<CustomEdgeType>(initialEdges);

	// fetch the single pipelines data
	const {
		data: pipeline,
		error,
		isLoading,
		isError,
	} = useQuery({
		queryKey: ['pipelines'],
		queryFn: () => getPipeline(id),
		retry: 1,
	});

	const onConnect: OnConnect = useCallback(
		(connection) => {
			// create an edge
			const newEdge = {
				id: `${connection.source}->${connection.target}`,
				source: connection.source,
				target: connection.target,
				type: 'button-edge',
				animated: true,
			};
			// add the edge to the list of edges
			setEdges((prev) => [...prev, newEdge]);
		},
		[setEdges]
	);

	return (
		<>
			<ReactFlow<CustomNodeType, CustomEdgeType>
				nodes={nodes}
				nodeTypes={nodeTypes}
				onNodesChange={onNodesChange}
				edges={edges}
				edgeTypes={edgeTypes}
				onEdgesChange={onEdgesChange}
				onConnect={onConnect}
				fitView
			>
				<Toolbar />
				<Background gap={gridSize} />
				<MiniMap />
				<Controls />
			</ReactFlow>
		</>
	);
}
