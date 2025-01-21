# SvelteKit CORS Issue

When loading data from a path provided by `import.meta.glob`, SvelteKit produces a CORS error in local `preview` mode only. The dev process is unaffected, as are actual deployments.