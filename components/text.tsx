import { styled, Text as BaseText } from 'tamagui'

export const Text = styled(BaseText, {
  variants: {
    center: {
      true: {
        textAlign: 'center',
      },
    },
  },
})
