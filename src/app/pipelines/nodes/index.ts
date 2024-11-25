import type { BuiltInNode, Node, NodeTypes } from '@xyflow/react';
import PositionLoggerNode, {
	type PositionLoggerNode as PositionLoggerNodeType,
} from './node-types/poistion-logger';
import { AINode } from './node-types/ai-node';
import { TextNode } from './node-types/text-node';

export const initialNodes = [
	{
		id: 'a',
		type: 'input',
		position: { x: 0, y: 0 },
		data: { label: 'wire' },
	},
	{
		id: 'b',
		type: 'position-logger',
		position: { x: -100, y: 100 },
		data: { label: 'drag me!' },
	},
	{
		id: 'x',
		type: 'ai-node',
		position: { x: -369, y: 88 },
		data: {
			system: "You're an AI Model to answer questions",
			prompt: 'What is the meaning of life?',
			model: 'gpt-4o',
		},
	},
	{
		id: 'y',
		type: 'text-node',
		position: { x: 370, y: 87 },
		data: {
			text: 'This is just a sample text node with variables, {{v1}} {{v2}}',
			variables: ['Hi', 'there'],
		},
	},
	{ id: 'c', position: { x: 100, y: 100 }, data: { label: 'your ideas' } },
	{
		id: 'd',
		type: 'output',
		position: { x: 0, y: 200 },
		data: { label: 'with React Flow' },
	},
] satisfies Node[];

export const nodeTypes = {
	'position-logger': PositionLoggerNode,
	'ai-node': AINode,
	'text-node': TextNode,
	// Add any of your custom nodes here!
} satisfies NodeTypes;

// Append the types of you custom edges to the BuiltInNode type
export type CustomNodeType = BuiltInNode | PositionLoggerNodeType;
