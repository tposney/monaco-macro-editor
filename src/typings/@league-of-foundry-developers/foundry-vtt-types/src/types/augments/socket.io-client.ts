
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/types/augments/socket.io-client.d.ts",
      "import * as _io from 'socket.io-client';\n\ndeclare global {\n  // eslint-disable-next-line no-var\n  var io: typeof _io & typeof _io.io & { connect: typeof _io.io; managers: Partial<Record<string, _io.Manager>> };\n  namespace io {\n    type Socket = _io.Socket;\n    type SocketOptions = _io.SocketOptions;\n    type Manager = _io.Manager;\n    type ManagerOptions = _io.ManagerOptions;\n  }\n}\n"
    ]
  