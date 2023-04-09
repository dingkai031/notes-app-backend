/* eslint-disable linebreak-style */
const NotesHandler = require('./handler');
const routes = require('./routes');

module.exports = {
  name: 'notes',
  version: '1.0.0',
  async register(server, { service, validator }) {
    const noteHandler = new NotesHandler(service, validator);
    server.route(routes(noteHandler));
  },
};
