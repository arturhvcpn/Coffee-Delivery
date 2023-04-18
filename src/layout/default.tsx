import { ReactNode } from 'react'
import { NextHead } from '@/ui'
import { NavBar } from '@/components'
import { ChildrenWrapper } from './styles'

interface DefaultLayoutProps {
  children: ReactNode
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return (
    <>
      <NextHead />
      <NavBar />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  )
}

export { DefaultLayout }
