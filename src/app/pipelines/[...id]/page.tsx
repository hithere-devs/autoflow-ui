import Flow from '../react-flow';

export default async function Page({ params }: { params: { id: string[] } }) {
	const { id } = await params;
	// return <h1>My Page {id[0]}</h1>;
	return <Flow />;
}
