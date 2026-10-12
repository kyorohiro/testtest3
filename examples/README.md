# Examples

Store your runnable JavaScript examples here, such as /examples/demo.js.
Select the JavaScript file in the Run file selector, then press Run.
The default entry point is /index.js. Merely adding a file does not run it.

Bundled examples are grouped into basic, fm, midi, psg, dac, noise, samples and fx folders.
Open a .js file in FILES to edit it and select it as the Run file.
For shared code, create a module in /lib/ and load it from your example:
```js
const { notes } = await import('../lib/notes.js');
```
See /lib/README.md for the matching module example.

Cassette imports classify JavaScript files directly inside examples/ as examples.
This README is a starter file. You can edit or delete it.
