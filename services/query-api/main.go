package main

import (
	"context"
	"log"
	"net"
	"os"

	"google.golang.org/grpc"
	"evenstevens/server"
	pb "evenstevens/proto"
)

func main() {
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	grpcServer := grpc.NewServer()
	pb.RegisterParityServiceServer(grpcServer, &server.ParityServer{})
	log.Println("gRPC Query API running on :50051")
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
