/* Shared settings for the website mode (no server needed).
   Signaling = free public PeerJS broker (only used to introduce phone and PC; files never pass through it).
   STUN = free public servers. If some phone networks cannot connect directly, add a TURN server here. */
window.QRCFG = window.QRCFG || {
  peer: { host: '0.peerjs.com', port: 443, path: '/', secure: true, key: 'peerjs' },
  ice: [
    { urls: 'stun:stun.l.google.com:19302' },
    { urls: 'stun:stun1.l.google.com:19302' },
    { urls: 'stun:stun.cloudflare.com:3478' }
    // , { urls: 'turn:YOUR-TURN-SERVER:3478', username: 'user', credential: 'pass' }
  ]
};
