export interface Session {
  user: {
    email: string;
    name?: string;
    picture?: string;
  }
}

export interface Stock {
  Close: number;
  High: number;
  Low: number;
  Timestamp: Date;
}
