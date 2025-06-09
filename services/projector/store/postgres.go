package store

import (
	"database/sql"
	_ "github.com/lib/pq"
	"os"
)

func SaveParityEventToPostgres(event map[string]interface{}) error {
	db, err := sql.Open("postgres", os.Getenv("POSTGRES_URL"))
	if err != nil {
		return err
	}
	defer db.Close()
	_, err = db.Exec(`INSERT INTO parity_events (number, is_even, evaluated_by, timestamp, raw_ai_response) VALUES ($1, $2, $3, $4, $5)`,
		event["number"], event["isEven"], event["evaluatedBy"], event["timestamp"], event["rawAiResponse"])
	return err
}
