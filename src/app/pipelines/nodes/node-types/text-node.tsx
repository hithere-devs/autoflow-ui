import TextareaLimit from '@/components/ui/text-area-limit';
import { Handle, Node, NodeProps, Position } from '@xyflow/react';
import React from 'react';

export type TextNodeData = {
	text: string;
	variables: string[];
};

export type TextNodeType = Node<TextNodeData>;

export const TextNode = ({
	positionAbsoluteX,
	positionAbsoluteY,
	data,
}: NodeProps<TextNodeType>) => {
	let { text, variables } = data;
	// how can we replace the variables in the text with the actual values?
	// text = text
	// 	.replace(/{{v1}}/g, "<span className='text-red-600'>Hi</span>")
	// 	.replace(/{{v2}}/g, "<span className='text-red-600'>there</span>");
	return (
		<div className='w-[300px] bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-xl'>
			<div className='p-4'>
				<TextareaLimit
					label='Text'
					maxLength={1000}
					value={text}
					className='min-h-[120px] resize-none'
				/>

				{variables && variables.length > 0 && (
					<div className='mt-3 flex flex-wrap gap-2'>
						{variables.map((variable) => (
							<span
								key={variable}
								className='px-2 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-md'
							>
								{variable}
							</span>
						))}
					</div>
				)}
			</div>

			<Handle
				type='target'
				position={Position.Left}
				className='!bg-blue-500 !w-3 !h-3'
			/>
			<Handle
				type='source'
				position={Position.Right}
				className='!bg-blue-500 !w-3 !h-3'
			/>
		</div>
	);
};
