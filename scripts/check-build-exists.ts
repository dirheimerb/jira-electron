import chalk from 'chalk';
import detectPort from 'detect-port';

const port:number = parseInt('1212', 10);

detectPort(port, (err, availablePort) => {
  if (port === Number(availablePort)) {
    throw new Error(
      chalk.whiteBright.bgRed.bold(
        `Port "${port}" on "localhost" is already in use. Please use another port. ex: PORT=4343 npm start`
      )
    );
  } else {
    process.exit(0);
  }
});