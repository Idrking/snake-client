let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }

    switch (key) {
      case 'w':
        connection.write('Move: up');
        break;
      case 'a':
        connection.write('Move: left');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'd':
        connection.write('Move: right');
        break;
      case 'y':
        connection.write('Say: Yes');
        break;
      case 'n':
        connection.write('Say: No');
        break;
      case 'h':
        connection.write('Say: Horse');
        break;
    }
  };

  stdin.on('data', (key) => {
    handleUserInput(key);
  });
  return stdin;
};

module.exports = {setupInput};