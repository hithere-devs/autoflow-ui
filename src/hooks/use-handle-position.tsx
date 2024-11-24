import { Handle, useUpdateNodeInternals } from '@xyflow/react';

// hook to handle generate the handles for the node
export const useHandlePosition = (numberOfConnections: any) => {
	const { id, Position, left, right } = numberOfConnections;
	const leftCount = left?.length;
	const rightCount = right?.length;

	// hook to update the node internals after any render or re-render of hanles
	const updateNodeInternals = useUpdateNodeInternals();

	// if there are no connections, return null
	if (!leftCount && !rightCount) {
		return { leftHandlers: null, rightHandlers: null };
	}

	// generating the left handlers
	const leftHandlers =
		leftCount &&
		left.map(({ name }: any, index: any) => {
			return (
				<Handle
					key={index}
					type='target'
					position={Position.Left}
					id={`${id}-${name}`}
					// calculating the top position of the handler
					style={{
						top: `${((leftCount - index) * 100) / (leftCount + 1)}%`,
					}}
				>
					<span
						className='custom-drag-handle rounded-md text-xs text-white bg-primary'
						style={{
							position: 'absolute',
							left: -85,
							top: 15,
							padding: '5px 10px',
						}}
					>
						{name}
					</span>
				</Handle>
			);
		});

	// generating the right handlers
	const rightHandlers =
		rightCount &&
		right.map(({ name }: any, index: any) => {
			return (
				<Handle
					key={index}
					type='source'
					position={Position.Right}
					id={`${id}-${name}`}
					// calculating the top position of the handler
					style={{
						top: `${((rightCount - index) * 100) / (rightCount + 1)}%`,
					}}
				>
					<span
						className='custom-drag-handle rounded-md text-xs text-white bg-primary'
						style={{
							position: 'absolute',
							right: -85,
							top: 15,
							padding: '5px 10px',
						}}
					>
						{name}
					</span>
				</Handle>
			);
		});

	// update the node internals
	updateNodeInternals(id);

	return { leftHandlers, rightHandlers };
};
