const {fs, shell, args, cwd} = await import('tetorica:shell');
console.log('Shell script:', cwd, args);
const source = await fs.readFile('/index.js');
await fs.writeText('/scripts/index-copy.js', source);
const result = await shell.execute(['ls', '/scripts']);
if (result.code) throw new Error(result.stderr);
console.log(result.stdout);
