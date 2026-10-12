# Samples

Store audio files here, such as /samples/kick.wav. Import or drop your own files into FILES.

Load and play a file from your project:
```js
await sample.load('kick', '/samples/kick.wav');
await sample.play('kick', { gain: 0.8 });
```

The file must exist before running this example. Use an absolute project path when loading audio.
Cassette imports classify audio files directly inside samples/ as samples; sample.load can also load other project paths.
Use Export Cassette to save the project together with its audio files.
This README is a starter file. You can edit or delete it.
