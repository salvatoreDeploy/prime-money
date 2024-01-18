import { ReactNode, createContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  created_at: string
}

interface TrasactionsContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TrasactionsContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTrasactions] = useState<Transaction[]>([])

  async function getTrasactions(): Promise<Transaction[]> {
    const response = await fetch('http://localhost:3333/transactions')
    const transactions = await response.json()

    setTrasactions(transactions)

    return transactions
  }

  useEffect(() => {
    getTrasactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  )
}
