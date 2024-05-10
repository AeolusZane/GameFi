import { Check, ChevronDown } from '@tamagui/lucide-icons'
import { useState } from 'react'
import type { SelectProps } from 'tamagui'

import { Select, XStack, YStack } from 'tamagui'

export function SelectDemo() {

    return (<YStack>
        <XStack>
            <SelectDemoItem id="select-demo-1" />
        </XStack>
    </YStack>)

}
export function SelectDemoItem(props: SelectProps) {

    const [val, setVal] = useState('apple')
    return (
        <Select value={val} onValueChange={setVal} disablePreventBodyScroll {...props}>
            <Select.Trigger iconAfter={ChevronDown}>
                <Select.Value placeholder="Something" />
            </Select.Trigger>

            <Select.Content zIndex={200000}>
                <Select.ScrollUpButton />

                <Select.Viewport
                    top={500}
                    width={200}
                >
                    <Select.Group
                        style={{
                            top: 0,
                        }}
                    >
                        <Select.Label>
                            <div>
                                Fruits
                            </div>
                        </Select.Label>
                        {/* for longer lists memoizing these is useful */}
                        {items.map((item, i) => {
                            return (
                                <Select.Item
                                    index={i}
                                    key={item.name}
                                    value={item.name.toLowerCase()}
                                >
                                    <Select.ItemText>
                                        <div>
                                            {item.name}
                                        </div>
                                    </Select.ItemText>
                                    <Select.ItemIndicator>
                                        <Check />
                                    </Select.ItemIndicator>
                                </Select.Item>
                            )
                        })}
                    </Select.Group>
                </Select.Viewport>

                <Select.ScrollDownButton />
            </Select.Content>
        </Select>)

}
const items = [

    { name: 'Apple' },

    { name: 'Pear' },

    { name: 'Blackberry' },

]
