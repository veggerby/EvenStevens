package main

import (
	"context"
	"encoding/json"
	"log"
	"os"
	"time"

	"github.com/segmentio/kafka-go"
	"evenstevens/store"
)

func main() {
	reader := kafka.NewReader(kafka.ReaderConfig{
		Brokers:   []string{os.Getenv("KAFKA_BROKER")},
		Topic:     "events.parity",
		GroupID:   "projector-group",
		MinBytes:  10e3,
		MaxBytes:  10e6,
	})
	defer reader.Close()
	for {
		m, err := reader.ReadMessage(context.Background())
		if err != nil {
			log.Printf("Kafka read error: %v", err)
			continue
		}
		var event map[string]interface{}
		if err := json.Unmarshal(m.Value, &event); err != nil {
			log.Printf("Event unmarshal error: %v", err)
			continue
		}
		if event["type"] == "ParityDeterminedEvent" {
			store.UpdateReadModel(event)
		}
	}
}
