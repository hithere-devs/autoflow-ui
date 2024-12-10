import React, { useState } from 'react';
import { nodeTypes as nodes } from './nodes';

type Props = {};

const Toolbar = (props: Props) => {
	const [nodeTypes, setNodeTypes] = useState(nodes);

	const handleDragStart = (event: React.DragEvent, nodeType: string) => {
		event.dataTransfer.setData('application/reactflow', nodeType);
		event.dataTransfer.effectAllowed = 'move';
	};

	const handleDragEnd = (event: React.DragEvent) => {
		// Optional: Add any cleanup or state reset logic here
	};

	return (
		<div className='bg-white flex gap-4 z-10'>
			{Object.keys(nodeTypes).map((node) => (
				<div
					key={node}
					draggable
					onDragStart={(e) => handleDragStart(e, node)}
					onDragEnd={handleDragEnd}
					className='cursor-grab hover:bg-gray-100 p-2 rounded'
				>
					{node.replace('-', ' ')}
				</div>
			))}
		</div>
	);
};

export default Toolbar;
