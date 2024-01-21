/* eslint-disable @typescript-eslint/no-unused-vars */
import { Header } from '../../components/Header'
import { SearchForm } from '../../components/SearchForm'
import { Summary } from '../../components/Sumary'
import {
  PriceHighLight,
  TransactionsTable,
  TrasactionsContainer,
} from './style'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormated, priceFormated } from '../../utils/formated'
import { useContextSelector } from 'use-context-selector'

export function Transactions() {
  const transactions = useContextSelector(TransactionsContext, (context) => {
    return context.transactions
  })

  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            {transactions.map((transaction) => {
              return (
                <tr key={transaction.id}>
                  <td width="50%">{transaction.description}</td>
                  <td>
                    <PriceHighLight variant={transaction.type}>
                      {transaction.type === 'outcome' && '- '}
                      {priceFormated.format(transaction.price)}
                    </PriceHighLight>
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {dateFormated.format(new Date(transaction.created_at))}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </div>
  )
}
