import { useHandlePosition } from '@/hooks/use-handle-position';
import { Position } from '@xyflow/react';
import React from 'react';

export const RenderNode = (node: any) => {
	const { heading, description, left, right, elements } = node.node;

	// genrate default handlers for left and right side of the node
	const { leftHandlers, rightHandlers } = useHandlePosition({
		id: node.id,
		Position,
		left,
		right,
	});

	return (
		<>
			<div className='border border-border bg-secondary text-secondary-foreground p-4 rounded-md shadow-lg flex flex-col space-y-2 min-w-[220px] min-h-[150px]'>
				{/* rendering left handlers */}
				{leftHandlers?.map((handler: any) => handler)}

				{/*
        could be later converted in to their own
        components of needed to be used at multiple palces
    */}

				{/* Heading */}
				{heading && (
					<div>
						<span className='text-xl font-semibold'>{heading}</span>
					</div>
				)}

				{/* Description */}
				{description && (
					<div>
						<span className='text-sm text-muted-foreground'>{description}</span>
					</div>
				)}

				{/*

        Using these elements allows us :
        - to define all the node core details in one place
        - also this doesn't harm the abstraction in any way cause we will need to only render node specific data in the each node's file.

    */}
				{elements?.map((ce: any, index: any) =>
					React.cloneElement(ce.element, { key: index, node: node })
				)}

				{/* rendering right handlers */}
				{rightHandlers?.map((handler: any) => handler)}
			</div>
		</>
	);
};
