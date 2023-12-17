import { Header } from '../../components/Header'
import { Summary } from '../../components/Sumary'
import {
  PriceHighLight,
  TransactionsTable,
  TrasactionsContainer,
} from './style'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TrasactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="outcome">R$- 12.000,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>02/04/2023</td>
            </tr>

            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TrasactionsContainer>
    </div>
  )
}
