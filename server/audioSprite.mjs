const crrDir = process.cwd();

const exclude = [
	".DS_Store",
	"sprite"
];

const dirs = await fs.readdir(`${crrDir}/assets/sounds`);
for (const i in dirs) {
	const dir = dirs[i];
	let shouldExclude = false;
	for (const j in exclude) if (exclude[j] == dir) shouldExclude = true;
	if (!shouldExclude) {
		console.log("create sprite: " + dir);
		$`npm run audio_sprite -dir=${dirs[i]}`;
	}
}