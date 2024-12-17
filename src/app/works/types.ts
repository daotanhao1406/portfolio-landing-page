export interface DropdownProps {
  label: string
  isOpen: boolean
  onClick: () => void
}

export interface DropdownItem {
  label: string
  icon?: React.ReactNode
  onClick: () => void
  active?: boolean
}

export interface DropdownMenuProps {
  isOpen: boolean
  items: DropdownItem[]
}
