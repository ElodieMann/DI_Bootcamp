#!/usr/bin/env node
import { program } from 'commander'; // Importation nommée
import path from 'path';

program
  .command('greet')
  .description('create a colorful greeting message and display it in the terminal')
  .action(() => {
    import('./commands/greet').then((greetModule) => {
      const greet = greetModule.default; // L'export par défaut du modul
      greet();
    });
  });

program
  .command('fetch')
  .description('make an HTTP GET request to a public API (e.g., weather data or news data) and display the fetched data in the terminal.')
  .action(() => {
    import('./commands/fetch').then((fetchModule) => {
      const fetch = fetchModule.default; 
      fetch();
    });
  });

program
  .command('read <file>')
  .description('read and display the content of a specified file in the terminal')
  .action((file) => {
    import('./commands/read').then((readModule) => {
      const read = readModule.default;
      const filePath = path.resolve(file);
      read(filePath);
    });
  });

program.parse(process.argv);
