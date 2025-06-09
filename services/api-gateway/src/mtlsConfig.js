// mTLS config stub for Node.js services
module.exports = {
  key: process.env.MTLS_KEY_PATH || '/etc/mtls/client.key',
  cert: process.env.MTLS_CERT_PATH || '/etc/mtls/client.crt',
  ca: process.env.MTLS_CA_PATH || '/etc/mtls/ca.crt',
};
