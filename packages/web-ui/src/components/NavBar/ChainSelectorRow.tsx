
import { useWeb3React } from '@web3-react/core'
// import { getChainInfo } from 'constants/chainInfo'
import styled, { useTheme } from 'styled-components'
import { getChainInfo } from '@constants/chain'

const LOGO_SIZE = 20

const Container = styled.button<{ disabled: boolean }>`
  align-items: center;
  background: none;
  border: none;
  border-radius: 12px;
  color: ${({ theme }) => theme.neutral1};
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  display: grid;
  grid-template-columns: min-content 1fr min-content;
  justify-content: space-between;
  line-height: 20px;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  padding: 10px 8px;
  text-align: left;
  transition: ${({ theme }) => theme.transition.duration.medium} ${({ theme }) => theme.transition.timing.ease}
    background-color;
  width: 240px;

  @media only screen and (max-width: ${({ theme }) => `${theme.breakpoint.xs}px`}) {
    width: 100%;
  }

  &:hover {
    background-color: ${({ disabled, theme }) => (disabled ? 'none' : theme.surface3)};
  }
`
const Label = styled.div`
  grid-column: 2;
  grid-row: 1;
  font-size: 16px;
  font-weight: 485;
`
const Status = styled.div`
  grid-column: 3;
  grid-row: 1;
  display: flex;
  align-items: center;
  width: ${LOGO_SIZE}px;
`
const CaptionText = styled.div`
  color: ${({ theme }) => theme.neutral2};
  font-size: 12px;
  grid-column: 2;
  grid-row: 2;
`

interface ChainSelectorRowProps {
  disabled?: boolean
  targetChain: number
  onSelectChain: (targetChain: number) => void
  isPending: boolean
}
export default function ChainSelectorRow({ disabled, targetChain, onSelectChain, isPending }: ChainSelectorRowProps) {
  const { chainId } = useWeb3React()
  const active = chainId === targetChain
  const chainInfo = getChainInfo(targetChain)
  const label = chainInfo?.label

  // const theme = useTheme()

  return (
    <Container
      data-testid={`${chainId}-selector`}
      disabled={!!disabled}
      onClick={() => {
        if (!disabled) onSelectChain(targetChain)
      }}
    >{label && <Label>{label}</Label>}
      {disabled && (
        <CaptionText>
          Unsupported by your wallet
        </CaptionText>
      )}
      {isPending && (
        <CaptionText>
          Approve in wallet
        </CaptionText>
      )}
      <Status>
        {active && '✅'}
        {!active && isPending && 'loading...'}
      </Status>
    </Container>
  )
}
