// This is a stub for a blockchain-style audit trail for JSON proof with signatures and QR code.
module.exports = function generateParityProof(event) {
  return {
    ...event,
    signatures: [
      '0xdeadbeef',
      '0xcafebabe',
      '0x42even42'
    ],
    qrCode: 'data:image/png;base64,FAKEQRCODE',
    proofType: 'blockchain-style',
  };
};
