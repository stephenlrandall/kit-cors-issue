export async function load({ fetch }) {
	const lib = import.meta.glob(
		'/src/lib/*.json',
		{
			query: '?url',
			import: 'default',
			eager: true
		}
	);

	const path = lib['/src/lib/sample.json'];

	console.log(`requesting resource: ${path}`);

	const file = await fetch(path).then(res => res.json());

	return { file };
}