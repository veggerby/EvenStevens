package store

import (
	"fmt"
	"os"
	"github.com/go-redis/redis/v8"
	"context"
)

var ctx = context.Background()
var redisClient = redis.NewClient(&redis.Options{
	Addr: os.Getenv("REDIS_URL"),
})

func UpdateReadModel(event map[string]interface{}) {
	key := fmt.Sprintf("parity:%v", event["number"])
	redisClient.HSet(ctx, key, map[string]interface{}{
		"isEven": event["isEven"],
		"evaluatedBy": event["evaluatedBy"],
		"timestamp": event["timestamp"],
		"rawAiResponse": event["rawAiResponse"],
	})
	// TODO: Also update Postgres for full audit trail
}
