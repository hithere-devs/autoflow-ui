/**
 * An array of node configuration objects used to define custom nodes in the system.
 * Each node object contains metadata and elements necessary for rendering the node and connecting it to other nodes.
 *
 * Properties for each node:
 * - name: Unique identifier for the node.
 * - type: Specifies the node type, which can be used for rendering or logic purposes.
 * - heading: A user-friendly label or title for the node.
 * - description: Optional, a brief explanation of the node's function.
 * - elements: An array of objects representing React components that define the node's visual representation.
 * - left: Defines the connections (ports) available on the left side of the node (inputs).
 * - right: Defines the connections (ports) available on the right side of the node (outputs).
 *
 * Example nodes:
 * 1. InputNode: Custom input node with an input element and a right-side output.
 * 2. LLMNode: A node representing a Language Model with system and prompt inputs, and a source output.
 * 3. TextNode: A simple text node with an editable textarea element and a right-side output.
 * 4. OutputNode: Custom output node with a value input and a renderable output element.
 * 5. APICallNode: An abstracted node to make an API call to a specified endpoint, with a response output.
 * 6. SlackIntegrationNode: A node to send notifications to a specified Slack channel with a response output.
 * 7. FileSaveNode: A node that saves the output data to a file, with data input and confirmation output.
 * 8. ScriptExecutionNode: A node that allows executing a Python script on input data, with input data and result output.
 * 9. Notes: A node for creating and managing notes, with a notes input.
 */
export const nodes = [
	{
		name: 'InputNode',
		type: 'customInput',
		heading: 'Input',
		description: null,
		elements: [
			{
				name: 'inputNodeElement',
				element: `<div>Hello</div>`,
			},
		],
		right: [{ name: 'source' }],
	},
	{
		name: 'LLMNode',
		type: 'llm',
		heading: 'LLM',
		description: 'This is a LLM.',
		left: [{ name: 'system' }, { name: 'prompt' }],
		right: [{ name: 'source' }],
	},

	// {
	// 	name: 'OutputNode',
	// 	type: 'customOutput',
	// 	heading: 'Output',
	// 	description: null,
	// 	elements: [
	// 		{
	// 			name: 'outputNodeElement',
	// 			element: <OutputNode />,
	// 		},
	// 	],
	// 	left: [{ name: 'value' }],
	// },
	// // example nodes after abstracting the logic
	// {
	// 	name: 'APICallNode',
	// 	type: 'apiCall',
	// 	heading: 'API Call',
	// 	description: 'Makes an API call to a given endpoint',
	// 	elements: [
	// 		{
	// 			name: 'apiCallNodeElement',
	// 			element: <APICallNode />,
	// 		},
	// 	],
	// 	right: [{ name: 'response' }],
	// },
	// {
	// 	name: 'SlackIntegrationNode',
	// 	type: 'slackIntegration',
	// 	heading: 'Slack Integration',
	// 	description: 'Send notifications to Slack',
	// 	elements: [
	// 		{
	// 			name: 'slackIntegrationElement',
	// 			element: <SlackIntegrationNode />,
	// 		},
	// 	],
	// 	left: [{ name: 'trigger' }],
	// },
	// {
	// 	name: 'FileSaveNode',
	// 	type: 'fileSave',
	// 	heading: 'Save to File',
	// 	description: 'Save output data to a file',
	// 	elements: [
	// 		{
	// 			name: 'fileSaveElement',
	// 			element: <FileSaveNode />,
	// 		},
	// 	],
	// 	left: [{ name: 'data' }],
	// },
	// {
	// 	name: 'ScriptExecutionNode',
	// 	type: 'scriptExecution',
	// 	heading: 'Python Script Execution',
	// 	description: 'Execute Python script on the input data',
	// 	elements: [
	// 		{
	// 			name: 'scriptExecutionElement',
	// 			element: <ScriptExecutionNode />,
	// 		},
	// 	],
	// 	left: [{ name: 'inputData' }],
	// 	right: [{ name: 'result' }],
	// },
	// {
	// 	name: 'Notes',
	// 	type: 'notes',
	// 	heading: 'Notes',
	// 	description: null,
	// 	elements: [
	// 		{
	// 			name: 'databaseQueryElement',
	// 			element: <Notes />,
	// 		},
	// 	],
	// 	// left: [{ name: 'note' }],
	// },
];
