import { DropdownSelector } from "@components/DropdownSelector"
import { useState } from "react"
import styled from "styled-components"
import { useWeb3React } from "@web3-react/core"
import { CHAIN_NAMES, MAIN_NETS } from "@constants/chain"
import ChainSelectorRow from "./ChainSelectorRow"
import { useSelectChain } from "@hook/useSelectChain"

const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-right: 10px;
`
const DropdownWrapper = styled.div``


export default function NavBar() {
    const [toggleOpen, setToggleOpen] = useState(false)
    const { chainId } = useWeb3React()
    const supportedChains = [MAIN_NETS.ETHER, MAIN_NETS.LOCAL_TEST]
    const switchChain = useSelectChain()

    const onSelectChain = async (targetChain: MAIN_NETS) => {
        await switchChain(targetChain)
        setToggleOpen(false)
    }


    return <Container>
        <DropdownWrapper>
            <DropdownSelector
                isOpen={toggleOpen}
                toggleOpen={() => {
                    setToggleOpen(!toggleOpen)
                }}
                internalMenuItems={<div>
                    {supportedChains.map((chain) => {
                        return <ChainSelectorRow
                            key={chain}
                            targetChain={chain}
                            onSelectChain={onSelectChain}
                            isPending={false}
                        />
                    })}
                </div>}
                menuLabel={<>{CHAIN_NAMES[chainId as MAIN_NETS] || 'Please Select A Chain'}</>}
            />
        </DropdownWrapper>
    </Container>
}