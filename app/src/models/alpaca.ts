import Alpaca from '@alpacahq/alpaca-trade-api'

const key = process.env.APCA_API_KEY_ID
const secret = process.env.APCA_API_SECRET_KEY

export const alpaca = new Alpaca({
  keyId: key,
  secretKey: secret,
  paper: true
})

