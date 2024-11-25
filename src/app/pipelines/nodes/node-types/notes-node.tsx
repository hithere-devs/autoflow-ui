import TextareaLimit from '@/components/ui/text-area-limit';

import { Node, NodeProps } from '@xyflow/react';
import React from 'react';

export type NotesNodeData = {
	content: string;
};

export type NotesNodeType = Node<NotesNodeData>;

export const NotesNode = ({ data }: NodeProps<NotesNodeType>) => {
	const { content } = data;

	return (
		<div className='w-[250px] bg-yellow-200/80 rounded-lg shadow-sm border border-yellow-500/20 overflow-hidden transition-all duration-200 hover:shadow-md focus-within:ring-2 focus-within:ring-yellow-500/50'>
			<div className='p-4 space-y-3'>
				<TextareaLimit
					label='Notes'
					maxLength={1500}
					value={content}
					notes={true}
					className='min-h-[150px] bg-transparent border-yellow-500/20 text-yellow-800 placeholder-yellow-800 focus:ring-0
                    focus-within:outline-none focus:border-yellow-500/50'
				/>
			</div>
		</div>
	);
};
