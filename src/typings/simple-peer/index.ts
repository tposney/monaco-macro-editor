
    export default [
      "simple-peer\\index.d.ts",
      "// Type definitions for simple-peer 9.11\n// Project: https://github.com/feross/simple-peer\n// Definitions by: Tomasz Łaziuk <https://github.com/tlaziuk>\n//                 xWiiLLz <https://github.com/xWiiLLz>\n// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped\n// TypeScript Version: 3.0\n\n/// <reference types=\"node\" />\n\nimport * as stream from \"stream\";\n\ndeclare const SimplePeer: SimplePeer.SimplePeer;\n\ndeclare namespace SimplePeer {\n    interface Options {\n        /** set to `true` if this is the initiating peer */\n        initiator?: boolean | undefined;\n        /** custom webrtc data channel configuration (used by [`createDataChannel`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createDataChannel)) */\n        channelConfig?: RTCDataChannelInit | undefined;\n        /** custom webrtc data channel name */\n        channelName?: string | undefined;\n        /** custom webrtc configuration (used by [`RTCPeerConnection`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) constructor) */\n        config?: RTCConfiguration | undefined;\n        /** custom offer options (used by [`createOffer`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createOffer) method) */\n        offerOptions?: RTCOfferOptions | undefined;\n        /** custom answer options (used by [`createAnswer`](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/createAnswer) method) */\n        answerOptions?: RTCAnswerOptions | undefined;\n        /** function to transform the generated SDP signaling data (for advanced users) */\n        sdpTransform?: ((this: Instance, sdp: string) => string) | undefined;\n        /** if video/voice is desired, pass stream returned from [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) */\n        stream?: MediaStream | undefined;\n        /** an array of MediaStreams returned from [`getUserMedia`](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) */\n        streams?: MediaStream[] | undefined;\n        /**  set to `false` to disable [trickle ICE](http://webrtchacks.com/trickle-ice/) and get a single 'signal' event (slower) */\n        trickle?: boolean | undefined;\n        /** custom webrtc implementation, mainly useful in node to specify in the [wrtc](https://npmjs.com/package/wrtc) package. */\n        wrtc?: {\n            RTCPeerConnection: typeof RTCPeerConnection;\n            RTCSessionDescription: typeof RTCSessionDescription;\n            RTCIceCandidate: typeof RTCIceCandidate;\n        } | undefined;\n        /** set to true to create the stream in Object Mode. In this mode, incoming string data is not automatically converted to Buffer objects. */\n        objectMode?: boolean | undefined;\n    }\n    interface SimplePeer {\n        prototype: Instance;\n        /**\n         * Create a new WebRTC peer connection.\n         *\n         * A \"data channel\" for text/binary communication is always established, because it's cheap and often useful. For video/voice communication, pass the stream option.\n         *\n         * If opts is specified, then the default options (see <https://github.com/feross/simple-peer#peer--new-peeropts>) will be overridden.\n         */\n        new (opts?: Options): Instance;\n\n        /** Detect native WebRTC support in the javascript environment. */\n        readonly WEBRTC_SUPPORT: boolean;\n\n        // ********************************\n        // methods which are not documented\n        // ********************************\n\n        /**\n         * Expose peer and data channel config for overriding all Peer\n         * instances. Otherwise, just set opts.config or opts.channelConfig\n         * when constructing a Peer.\n         */\n        config: RTCConfiguration;\n        /**\n         * Expose peer and data channel config for overriding all Peer\n         * instances. Otherwise, just set opts.config or opts.channelConfig\n         * when constructing a Peer.\n         */\n        channelConfig: RTCDataChannelInit;\n    }\n\n    type TypedArray =\n        | Int8Array\n        | Uint8Array\n        | Uint8ClampedArray\n        | Int16Array\n        | Uint16Array\n        | Int32Array\n        | Uint32Array\n        | Float32Array\n        | Float64Array;\n\n    type SimplePeerData = string | Buffer | TypedArray | ArrayBuffer | Blob;\n\n    type SignalData =\n        | {\n              type: \"transceiverRequest\";\n              transceiverRequest: {\n                  kind: string;\n                  init?: RTCRtpTransceiverInit | undefined;\n              };\n          }\n        | {\n              type: \"renegotiate\";\n              renegotiate: true;\n          }\n        | {\n              type: \"candidate\";\n              candidate: RTCIceCandidate;\n          }\n        | RTCSessionDescriptionInit;\n\n    interface Instance extends stream.Duplex {\n        /**\n         * Call this method whenever the remote peer emits a `peer.on('signal')` event.\n         *\n         * The `data` will encapsulate a webrtc offer, answer, or ice candidate. These messages help\n         * the peers to eventually establish a direct connection to each other. The contents of these\n         * strings are an implementation detail that can be ignored by the user of this module;\n         * simply pass the data from 'signal' events to the remote peer and call `peer.signal(data)`\n         * to get connected.\n         */\n        signal(data: string | SignalData): void;\n\n        /**\n         * Send text/binary data to the remote peer. `data` can be any of several types: `String`,\n         * `Buffer` (see [buffer](https://github.com/feross/buffer)), `ArrayBufferView` (`Uint8Array`,\n         * etc.), `ArrayBuffer`, or `Blob` (in browsers that support it).\n         *\n         * Note: If this method is called before the `peer.on('connect')` event has fired,\n         * then an exception will be thrown. Use `peer.write(data)`\n         * (which is inherited from the node.js [duplex stream](http://nodejs.org/api/stream.html) interface)\n         * if you want this data to be buffered instead.\n         */\n        send(data: SimplePeerData): void;\n\n        /** Add a `MediaStream` to the connection. */\n        addStream(stream: MediaStream): void;\n\n        /** Remove a `MediaStream` from the connection. */\n        removeStream(stream: MediaStream): void;\n\n        /** Add a `MediaStreamTrack` to the connection. Must also pass the `MediaStream` you want to attach it to. */\n        addTrack(track: MediaStreamTrack, stream: MediaStream): void;\n\n        /** Remove a `MediaStreamTrack` from the connection. Must also pass the `MediaStream` that it was attached to. */\n        removeTrack(track: MediaStreamTrack, stream: MediaStream): void;\n\n        /** Replace a `MediaStreamTrack` with another track. Must also pass the `MediaStream` that the old track was attached to. */\n        replaceTrack(oldTrack: MediaStreamTrack, newTrack: MediaStreamTrack, stream: MediaStream): void;\n\n        /** Add a `RTCRtpTransceiver` to the connection. Can be used to add transceivers before adding tracks. Automatically called as necessary by `addTrack`. */\n        addTransceiver(kind: string, init?: RTCRtpTransceiverInit): void;\n\n        // TODO: https://github.com/feross/simple-peer/blob/d972548299a50f836ca91c36e39304ef0f9474b7/index.js#L427\n        // destroy(onclose?: () => void): void;\n        /**\n         * Destroy and cleanup this peer connection.\n         *\n         * If the optional `err` parameter is passed, then it will be emitted as an `'error'`\n         * event on the stream.\n         */\n        destroy(error?: Error): void;\n\n        // ********************************\n        // methods which are not documented\n        // ********************************\n\n        readonly bufferSize: number;\n        readonly connected: boolean;\n        address():\n            | { port: undefined; family: undefined; address: undefined }\n            | { port: number; family: \"IPv6\" | \"IPv4\"; address: string };\n\n        // used for debug logging\n        _debug(message?: any, ...optionalParams: any[]): void;\n\n        // ******\n        // events\n        // ******\n        addListener(event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\", listener: () => void): this;\n        addListener(event: \"signal\", listener: (data: SignalData) => void): this;\n        addListener(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        addListener(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        addListener(event: \"data\", listener: (chunk: any) => void): this;\n        addListener(event: \"error\", listener: (err: Error) => void): this;\n        addListener(event: string | symbol, listener: (...args: any[]) => void): this;\n\n        emit(event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\"): boolean;\n        emit(event: \"signal\", data: SignalData): this;\n        emit(event: \"stream\", stream: MediaStream): this;\n        emit(event: \"track\", track: MediaStreamTrack, stream: MediaStream): this;\n        emit(event: \"data\", chunk: any): boolean;\n        emit(event: \"error\", err: Error): boolean;\n        emit(event: string | symbol, ...args: any[]): boolean;\n\n        on(event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\", listener: () => void): this;\n        on(event: \"signal\", listener: (data: SignalData) => void): this;\n        on(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        on(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        on(event: \"data\", listener: (chunk: any) => void): this;\n        on(event: \"error\", listener: (err: Error) => void): this;\n        on(event: string | symbol, listener: (...args: any[]) => void): this;\n\n        once(event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\", listener: () => void): this;\n        once(event: \"signal\", listener: (data: SignalData) => void): this;\n        once(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        once(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        once(event: \"data\", listener: (chunk: any) => void): this;\n        once(event: \"error\", listener: (err: Error) => void): this;\n        once(event: string | symbol, listener: (...args: any[]) => void): this;\n\n        prependListener(\n            event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\",\n            listener: () => void,\n        ): this;\n        prependListener(event: \"signal\", listener: (data: SignalData) => void): this;\n        prependListener(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        prependListener(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        prependListener(event: \"data\", listener: (chunk: any) => void): this;\n        prependListener(event: \"error\", listener: (err: Error) => void): this;\n        prependListener(event: string | symbol, listener: (...args: any[]) => void): this;\n\n        prependOnceListener(\n            event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\",\n            listener: () => void,\n        ): this;\n        prependOnceListener(event: \"signal\", listener: (data: SignalData) => void): this;\n        prependOnceListener(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        prependOnceListener(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        prependOnceListener(event: \"data\", listener: (chunk: any) => void): this;\n        prependOnceListener(event: \"error\", listener: (err: Error) => void): this;\n        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): this;\n\n        removeListener(\n            event: \"connect\" | \"close\" | \"end\" | \"pause\" | \"readable\" | \"resume\",\n            listener: () => void,\n        ): this;\n        removeListener(event: \"signal\", listener: (data: SignalData) => void): this;\n        removeListener(event: \"stream\", listener: (stream: MediaStream) => void): this;\n        removeListener(event: \"track\", listener: (track: MediaStreamTrack, stream: MediaStream) => void): this;\n        removeListener(event: \"data\", listener: (chunk: any) => void): this;\n        removeListener(event: \"error\", listener: (err: Error) => void): this;\n        removeListener(event: string | symbol, listener: (...args: any[]) => void): this;\n    }\n}\n\nexport = SimplePeer;\n"
    ]
  