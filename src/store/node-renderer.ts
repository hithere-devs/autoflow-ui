// node-renderer.ts
import React, { useMemo } from 'react';
import { nodes } from './nodes';
import { RenderNode } from '@/components/node/render-node';

interface NodeType {
	name: string;
	type: string;
	heading: string;
	right?: any;
	left?: any;
	elements?: any;
}

// Create nodes map once outside of function
const nodeComponents = nodes.reduce((acc, node: NodeType) => {
	acc[node.type] = (props: any) =>
		React.createElement(RenderNode, {
			key: node.type,
			node: node,
			...props,
		});
	return acc;
}, {} as Record<string, any>);

export function nodeRenderer() {
	return nodeComponents;
}
