import { MagnifyingGlass } from 'phosphor-react'
import { SearchFormContainer } from './style'

export function SearchFarm() {
  return (
    <SearchFormContainer>
      <input type="text" placeholder="Busque por uma transação" />
      <button>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </SearchFormContainer>
  )
}
