/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { SearchFarm } from '../../components/SearchForm'
import { Summary } from '../../components/Sumary'
import {
  PriceHighLight,
  TransactionsTable,
  TrasactionsContainer,
} from './style'
import { TransactionsContext } from '../../contexts/TransactionsContext'
import { dateFormated, priceFormated } from '../../utils/formated'

export function Transactions() {
  const { transactions } = useContext(TransactionsContext)

  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <SearchFarm />

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
