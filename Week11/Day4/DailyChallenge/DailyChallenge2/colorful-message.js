import chalk from 'chalk';

const color = () => {
   const colorText = chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz');
    console.log(colorText);
} 

export default color