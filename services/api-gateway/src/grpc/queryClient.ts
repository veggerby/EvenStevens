import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
const PROTO_PATH = '../../shared/proto/parity.proto';

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {});
const parityProto = grpc.loadPackageDefinition(packageDefinition).ParityService;

export function getParityResultFromGrpc(number: number) {
  return new Promise((resolve, reject) => {
    const client = new parityProto('query-api:50051', grpc.credentials.createInsecure());
    client.GetParity({ number }, (err: any, response: any) => {
      if (err) return reject(err);
      resolve({
        isEven: response.isEven,
        evaluatedBy: response.evaluatedBy,
        timestamp: response.timestamp,
        rawAiResponse: response.rawResponse,
      });
    });
  });
}
