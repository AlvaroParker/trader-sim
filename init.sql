CREATE TABLE IF NOT EXISTS transactions (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  amount INT NOT NULL,
  tra_type VARCHAR(255) NOT NULL
);


CREATE TABLE IF NOT EXISTS stocks (
  id SERIAL PRIMARY KEY,
  user_id VARCHAR(255) NOT NULL,
  compan VARCHAR(10) NOT NULL,
  price_per_share INT NOT NULL,
  shares INT NOT NULL,
  selled BOOLEAN NOT NULL DEFAULT FALSE,
  price_share_sold INT DEFAULT 0
);

CREATE INDEX ON transactions (user_id);

CREATE INDEX ON stocks (user_id);
CREATE INDEX on stocks (selled);
