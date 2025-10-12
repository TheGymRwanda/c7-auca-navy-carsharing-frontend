import { AppRoutes } from '@/types/AppRoutesType'

export type MenuItemProp = {
  handleShowNavMenu: () => void
  route: AppRoutes | string
  icon: React.ReactElement<React.JSXElementConstructor<string>>
  name: string
}
