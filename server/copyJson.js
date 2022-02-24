const dir = "/assets/sounds/sprite/";
const out = "/src/json/";
const fs = require("fs");

const crrDir = process.cwd();
const dirPath = `${crrDir}${dir}`;

const copyJson = async () => {
	await mkDir(`${crrDir}/dist`);
	const filenames = fs.readdirSync(dirPath);
	const copyJsonTasks = [];
	for (let i = 0; i < filenames.length; i++) {
		const jsonPath = `${dirPath}/${filenames[i]}/audioSprite.json`;
		const servePath = `${crrDir}${out}${filenames[i]}.json`;
		await mkDir(`${crrDir}${out}`);
		copyJsonTasks.push(new Promise(async (res, rej) => {
			await copyFile(jsonPath, servePath);
			res();
		}));
	}

	await Promise.all(copyJsonTasks);
};

const mkDir = (dir) => {
	return new Promise((res, rej) => {
		fs.mkdir(dir, (err) => {
			if (err) {
			}
			res();
		});
	});
};

const copyFile = (origin, copied) => {
	return new Promise((res, rej) => {
		fs.copyFile(origin, copied, (err) => {
			if (err) throw err;
			res();
		});
	});
};

if (require.main === module) {
	(async () => {
		await copyJson();
		process.exit(0);
	})();
}

module.exports = copyJson;