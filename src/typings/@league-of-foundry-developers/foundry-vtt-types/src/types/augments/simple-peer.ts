
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/types/augments/simple-peer.d.ts",
      "import * as _SimplePeer from 'simple-peer';\n\ndeclare global {\n  namespace SimplePeer {\n    type Options = _SimplePeer.Options;\n    type SimplePeer = _SimplePeer.SimplePeer;\n    type TypedArray = _SimplePeer.TypedArray;\n    type SimplePeerData = _SimplePeer.SimplePeerData;\n    type SignalData = _SimplePeer.SignalData;\n    type Instance = _SimplePeer.Instance;\n  }\n  const SimplePeer: SimplePeer.SimplePeer;\n}\n"
    ]
  