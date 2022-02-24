const distDir = "/dist";
const srcDir = "/src";
const fs = require("fs");
const JavaScriptObfuscator = require('javascript-obfuscator');

const crrDir = process.cwd();

const postScript = async () => {
	const preScript = await getFile(`${crrDir}${distDir}/browser/snd.js`);
	const preScriptMin = await getFile(`${crrDir}${distDir}/browser/snd.min.js`);
	const addedScript = await getFile(`${crrDir}${srcDir}/initialize.js`);
	const addedScriptObfuscated = JavaScriptObfuscator.obfuscate(addedScript).getObfuscatedCode();

	if (preScript.indexOf("post script") == -1) {
		await writeFile(
			`${crrDir}${distDir}/browser/snd.js`,
			`${preScript}\n\n//[[post script]]\n${addedScriptObfuscated}`
		);
	}
	if (preScriptMin.indexOf("post script") == -1) {
		await writeFile(
			`${crrDir}${distDir}/browser/snd.min.js`,
			`${preScriptMin}\n\n//[[post script]]\n${addedScriptObfuscated}`
		);
	}
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

const getFile = async (path) => {
	return new Promise(res => {
		fs.readFile(path, "utf-8", (err, data) => {
			if (err) throw err;
			res(data);
		});
	});
};

const writeFile = async (path, data) => {
	return new Promise(res => {
		fs.writeFile(path, data, (err) => {
			if (err) throw err;
			res();
		});
	});
};

if (require.main === module) {
	(async () => {
		await postScript();
		process.exit(0);
	})();
}

module.exports = postScript;