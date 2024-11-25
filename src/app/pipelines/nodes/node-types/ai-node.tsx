import SelectModern from '@/components/ui/select-modern';
import TextareaLimit from '@/components/ui/text-area-limit';
import { Handle, Node, NodeProps, Position } from '@xyflow/react';
import React from 'react';

export type AINodeData = {
	system: string;
	prompt: string;
	model: 'gpt-4o' | 'gpt-3.5-turbo';
};

export type AINodeType = Node<AINodeData>;

export const AINode = ({ data }: NodeProps<AINodeType>) => {
	const { system, prompt, model } = data;

	return (
		<div className='w-[300px] bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden transition-all duration-200 hover:shadow-xl'>
			<div className='p-4 space-y-4'>
				<div className='border-b border-gray-700 pb-3'>
					<SelectModern
						data={[
							{ label: 'GPT-4', value: 'gpt-4o' },
							{ label: 'GPT-3.5 Turbo', value: 'gpt-3.5-turbo' },
						]}
						selectLabel='AI Model'
						defaultValue={model}
					/>
				</div>

				<div className='space-y-3'>
					<TextareaLimit
						label='System Message'
						maxLength={200}
						value={system}
						className='min-h-[80px]'
					/>

					<TextareaLimit
						label='Prompt'
						maxLength={500}
						value={prompt}
						className='min-h-[120px]'
					/>
				</div>
			</div>

			<Handle
				type='source'
				position={Position.Right}
				className='!bg-blue-500 !w-3 !h-3'
			/>
			<Handle
				type='target'
				position={Position.Left}
				className='!bg-blue-500 !w-3 !h-3'
			/>
		</div>
	);
};
