import { ReactNode, createContext, useEffect, useState } from 'react'
import { axioApi } from '../api/axios'
import { z } from 'zod'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: string
}

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome']),
})

type createTransactionInputs = z.infer<typeof newTransactionFormSchema>

interface TrasactionsContextType {
  transactions: Transaction[]
  getTransactions: (query?: string) => Promise<Transaction[]>
  createNewTransaction: (data: createTransactionInputs) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TrasactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  async function getTransactions(query?: string): Promise<Transaction[]> {
    const transactions = await axioApi.get('/transactions', {
      params: {
        _sort: 'created_at',
        _order: 'desc',
        q: query,
      },
    })

    setTrasactions(transactions.data)

    return transactions.data
  }

  async function createNewTransaction(data: createTransactionInputs) {
    const { description, price, category, type } = data

    const response = await axioApi.post('/transactions', {
      description,
      price,
      category,
      type,
      created_at: new Date(),
    })

    setTrasactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{ transactions, getTransactions, createNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
