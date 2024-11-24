import { useState, useRef, useCallback, useMemo } from 'react';
import {
	ReactFlow,
	Controls,
	Background,
	MiniMap,
	ReactFlowInstance,
	Node,
	Connection,
	OnConnect,
	NodeTypes,
} from '@xyflow/react';

import { useStore } from '@/store';

const gridSize = 15;

interface StoreState {
	nodeTypes: NodeTypes;
	nodes: Node[];
	edges: any[];
	getNodeID: (type: string) => string;
	addNode: (node: Node) => void;
	onNodesChange: (changes: any) => void;
	onEdgesChange: (changes: any) => void;
	onConnect: (connection: Connection) => void;
}

// Memoize selector
const selector = (state: StoreState) => ({
	nodeTypes: state.nodeTypes,
	nodes: state.nodes,
	edges: state.edges,
	getNodeID: state.getNodeID,
	addNode: state.addNode,
	onNodesChange: state.onNodesChange,
	onEdgesChange: state.onEdgesChange,
	onConnect: state.onConnect,
});

interface NodeData extends Record<string, unknown> {
	id: string;
	nodeType: string;
}

export const PipelineUI = () => {
	const reactFlowWrapper = useRef<HTMLDivElement>(null);
	// const [reactFlowInstance, setReactFlowInstance] =
	// 	useState<ReactFlowInstance | null>(null);

	const store = useStore(selector);
	const {
		nodeTypes,
		nodes,
		edges,
		// getNodeID,
		// addNode,
		// onNodesChange,
		// onEdgesChange,
		// onConnect,
	} = useMemo(() => store, [store]);

	// const getInitNodeData = (nodeID: string, type: string): NodeData => ({
	// 	id: nodeID,
	// 	nodeType: type,
	// });

	// const onDrop = useCallback(
	// 	(event: React.DragEvent<HTMLDivElement>) => {
	// 		event.preventDefault();

	// 		const reactFlowBounds = reactFlowWrapper.current?.getBoundingClientRect();
	// 		if (!reactFlowBounds || !reactFlowInstance) return;

	// 		try {
	// 			const appData = event.dataTransfer.getData('application/reactflow');
	// 			if (!appData) {
	// 				console.warn('No data received in drag and drop');
	// 				return;
	// 			}

	// 			const parsedData = JSON.parse(appData);
	// 			const type = parsedData?.nodeType;

	// 			if (!type) {
	// 				console.warn('Invalid node type received');
	// 				return;
	// 			}

	// 			const position = reactFlowInstance.screenToFlowPosition({
	// 				x: event.clientX - reactFlowBounds.left,
	// 				y: event.clientY - reactFlowBounds.top,
	// 			});

	// 			const nodeID = getNodeID(type);
	// 			const newNode: Node = {
	// 				id: nodeID,
	// 				type,
	// 				position,
	// 				data: getInitNodeData(nodeID, type),
	// 			};

	// 			addNode(newNode);
	// 		} catch (error) {
	// 			console.error('Error processing drop event:', error);
	// 		}
	// 	},
	// 	[reactFlowInstance, getNodeID, addNode]
	// );

	// const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
	// 	event.preventDefault();
	// 	event.dataTransfer.dropEffect = 'move';
	// }, []);

	// const handleConnect: OnConnect = useCallback(
	// 	(params) => {
	// 		onConnect(params);
	// 	},
	// 	[onConnect]
	// );

	return (
		<div ref={reactFlowWrapper} style={{ width: '100%', height: '70vh' }}>
			<ReactFlow
				nodeTypes={nodeTypes}
				nodes={nodes}
				// onNodesChange={onNodesChange}
				fitView
				// onDrop={onDrop}
				// onDragOver={onDragOver}
				// onInit={setReactFlowInstance}
				edges={edges}
				// onEdgesChange={onEdgesChange}
				// onConnect={handleConnect}
			>
				<Background color='#aaa' gap={gridSize} />
				<Controls />
				<MiniMap />
			</ReactFlow>
		</div>
	);
};
