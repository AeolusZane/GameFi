const enum HeroName {
    Mage,
    Healer,
    Barbarian,
}

export async function getHeroAttr(contract: any, h: any) {
    const methods = contract.methods
    const magic = await methods.getMagic(h).call()
    const strength = await methods.getStrength(h).call()
    const intellect = await methods.getIntellect(h).call()
    const dex = await methods.getDex(h).call()
    const health = await methods.getHealth(h).call()

    const index = Number((h & 0x3n));
    let claz: any;
    switch (index) {
        case HeroName.Mage:
            claz = "法师";
            break;
        case HeroName.Healer:
            claz = "治疗师";
            break;
        case HeroName.Barbarian:
            claz = "野蛮人";
            break;
        default:
    }


    return {
        class: claz,
        magic,
        strength,
        intellect,
        dex,
        health
    }
}