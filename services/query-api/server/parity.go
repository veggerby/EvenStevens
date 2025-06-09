package server

import (
	"context"
	pb "evenstevens/proto"
	"os"
	"github.com/go-redis/redis/v8"
)

var redisClient = redis.NewClient(&redis.Options{
	Addr: os.Getenv("REDIS_URL"),
})

// ParityServer implements pb.ParityServiceServer
type ParityServer struct {
	pb.UnimplementedParityServiceServer
}

func (s *ParityServer) GetParity(ctx context.Context, req *pb.ParityRequest) (*pb.ParityResponse, error) {
	key := "parity:" + string(rune(req.Number))
	result, err := redisClient.HGetAll(ctx, key).Result()
	if err != nil || len(result) == 0 {
		return &pb.ParityResponse{IsEven: false, EvaluatedBy: "", RawResponse: "", Timestamp: ""}, nil
	}
	return &pb.ParityResponse{
		IsEven:      result["isEven"] == "true",
		EvaluatedBy: result["evaluatedBy"],
		RawResponse: result["rawAiResponse"],
		Timestamp:   result["timestamp"],
	}, nil
}
