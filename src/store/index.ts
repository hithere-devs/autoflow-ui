import { create } from 'zustand';
import { nodeRenderer } from './node-renderer';
import {
	addEdge,
	applyEdgeChanges,
	applyNodeChanges,
	Connection,
	Edge,
	EdgeChange,
	MarkerType,
	NodeChange,
	Node,
} from '@xyflow/react';

// Define store state interface
interface NodeState {
	nodeTypes: ReturnType<typeof nodeRenderer>;
	nodes: Node[];
	edges: Edge[];
	nodeIDs: Record<string, number>;
	getNodeID: (type: string) => string;
	addNode: (node: Node) => void;
	onNodesChange: (changes: NodeChange[]) => void;
	onEdgesChange: (changes: EdgeChange[]) => void;
	onConnect: (connection: Connection) => void;
}

export const useStore = create<NodeState>((set, get) => ({
	nodeTypes: nodeRenderer(),
	nodes: [],
	edges: [],
	nodeIDs: {},
	getNodeID: (type: string) => {
		const newIDs = { ...get().nodeIDs };
		if (newIDs[type] === undefined) {
			newIDs[type] = 0;
		}
		newIDs[type] += 1;
		set({ nodeIDs: newIDs });
		return `${type}-${newIDs[type]}`;
	},
	addNode: (node: Node) => {
		set({
			nodes: [...get().nodes, node],
		});
	},
	onNodesChange: (changes: NodeChange[]) => {
		set({
			nodes: applyNodeChanges(changes, get().nodes),
		});
	},
	onEdgesChange: (changes: EdgeChange[]) => {
		set({
			edges: applyEdgeChanges(changes, get().edges),
		});
	},
	onConnect: (connection: Connection) => {
		set({
			edges: addEdge(
				{
					...connection,
					type: 'smoothstep',
					animated: true,
					markerEnd: { type: MarkerType.Arrow, height: 20, width: 20 },
				},
				get().edges
			),
		});
	},
}));
