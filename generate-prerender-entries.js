import fs from 'fs/promises';
import path from 'path';

// Define the static projects folder
const projectsFolder = path.resolve('static/projects/Nature-Of-Code');

// Generate prerender entries
async function generatePrerenderEntries() {
	try {
		const folders = await fs.readdir(projectsFolder, { withFileTypes: true });

		// Filter for directories
		const entries = folders
			.filter((dirent) => dirent.isDirectory())
			.map((dirent) => `/projects/${dirent.name}`);

		// Write the prerender-entries.json file
		const outputPath = path.resolve('prerender-entries.json');
		await fs.writeFile(outputPath, JSON.stringify(entries, null, 2));

		console.log('Prerender entries generated successfully:', entries);
	} catch (error) {
		console.error('Error generating prerender entries:', error);
		process.exit(1); // Exit with an error code
	}
}

// Run the script
generatePrerenderEntries();
