import { Contract } from "@ethersproject/contracts";
import { getAttr, HeroDetailType, HeroName } from "@hook/useQueryHeroes";
import { useEffect, useState, ReactNode } from "react";
import { Loading } from "@components/Loading";
import { styled } from "styled-components";

const DEFAULT_HERO_ATTR: HeroDetailType = {
    name: HeroName.Mage,
    magic: 0,
    strength: 0,
    intellect: 0,
    dex: 0,
    health: 0,
}

type HeroInfoProps = {
    heroClz: HeroName;
    theme: any;
}

type HeroCardProps = {
    heroClz: HeroName,
    children: ReactNode;
}

function heroClassToColor(heroClass: string) {
    switch (heroClass) {
        case HeroName.Mage:
            return '#87CEEB';
        case HeroName.Healer:
            return '#8FBC8F';
        case HeroName.Barbarian:
            return '#B22222';
        default:
            return '#87CEEB';
    }
}

const InnerInfo = styled.div<HeroInfoProps>`
    border-radius: 5px;
    border: ${({ heroClz }) => heroClassToColor(heroClz) + ' 0.1rem dashed'};
    text-align: left;
    padding:0.2rem 1rem;
    min-width:7rem;

    color:${({ heroClz }) => heroClassToColor(heroClz)};
    & p{
        display: block;
        padding: 0.2em 0;
    }
`


const HeroInfo = styled.div<HeroInfoProps>`
    border-radius: 5px;
    border: ${({ heroClz }) => heroClassToColor(heroClz) + ' 0.1rem solid'};
    padding:0.5rem 0.5rem;
    color:${({ heroClz }) => heroClassToColor(heroClz)};
`

const HeroCardWrapper = ({ heroClz, children }: HeroCardProps) => {
    return <HeroInfo heroClz={heroClz} >
        <InnerInfo heroClz={heroClz}>
            {children}
        </InnerInfo>
    </HeroInfo>
}


export function HeroCard({ h, heroContract }: { h: bigint, heroContract: Contract | null }) {
    const [attr, setAttr] = useState<HeroDetailType>(DEFAULT_HERO_ATTR);

    useEffect(() => {
        if (!heroContract) {
            return;
        }
        getAttr(h, heroContract).then((attr) => {
            setAttr(attr);
        })
    }, [heroContract])

    if (!heroContract) {
        return <Loading />
    }

    return (
        <HeroCardWrapper heroClz={attr.name} >
            <p>职业: {attr.name}</p>
            <p>魔法: {attr.magic.toString()}</p>
            <p>力量: {attr.strength.toString()}</p>
            <p>智力: {attr.intellect.toString()}</p>
            <p>敏捷: {attr.dex.toString()}</p>
            <p>生命: {attr.health.toString()}</p>
        </HeroCardWrapper>
    )
}