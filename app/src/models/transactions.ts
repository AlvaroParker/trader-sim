import { getSession } from '@auth0/nextjs-auth0';

import sql from './db'
import joi from 'joi'
import { Session } from '@/common';

interface Transaction {
  id: number; // ID of the transaction
  user_id: string; // User ID (email)
  amount: number; // amount of the transaction
  tra_type: string; // Transaction type
}
const schemaNewTransaction = joi.object({
  amount: joi.number().required(),
  tra_type: joi.string().required()
})

const schemaSession = joi.object({
  user: joi.object({
    email: joi.string().email().required()
  })
})

export async function newTransaction(transaction: Transaction): Promise<boolean> {
  try {
    const transaction_new = await schemaNewTransaction.validateAsync(transaction)
    const session = await schemaSession.validateAsync(await getSession()) as Session

    sql`INSERT INTO transactions (user_id, amount, tra_type) VALUES (${session.user.email}, ${transaction_new.amount}, ${transaction_new.tra_type})`

  } catch (error) {
    if (error instanceof joi.ValidationError) {
      return false
    }
    throw error
  }
  return true
}
