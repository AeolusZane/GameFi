import { Spinner, YStack } from "tamagui";

export function Loading() {
    return <YStack padding="$8" alignItems="center">
        <Spinner size="large" color="$green10" />
    </YStack>
}