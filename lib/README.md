# Libraries

Store reusable JavaScript modules here. The folder name lib is a convention, not a requirement.
Export values from a module and load them with await import(...). There is no await export syntax.

Create /lib/notes.js:
```js
export const notes = ['C4', 'E4', 'G4'];
```

Then use it in /index.js:
```js
const { notes } = await import('./lib/notes.js');
for (const note of notes) {
  await play(note, { channel: CH1, duration: 0.2 });
  await sleep(0.25);
}
```

Relative import paths are resolved from the importing file. From /examples/demo.js, use ../lib/notes.js.
This README is a starter file. You can edit or delete it.
