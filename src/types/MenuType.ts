import { AppRoutes } from '@/types/AppRoutesType'

export type MenuLinkProp = {
  onclick?: () => void
  route: AppRoutes | string
  icon: React.ReactElement<React.JSXElementConstructor<string>>
  name: string
}
