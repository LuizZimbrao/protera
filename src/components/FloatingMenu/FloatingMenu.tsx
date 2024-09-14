import ToggleTheme from '../ToggleTheme/ToggleTheme'
import Link from 'next/link'

import House from '@/svgs/House'
import Notepad from '@/svgs/Notepad'
import Backpack from '@/svgs/Backpack'

import styles from './floatingmenu.module.css'

export default function FloatingMenu() {
  return (
    <header className={styles['floatingmenu-wrapper']}>
      <Link href="/">
        <House />
      </Link>
      <ToggleTheme />
      <Notepad />
      <Backpack />
    </header>
  )
}
