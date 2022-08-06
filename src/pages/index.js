import Link from 'next/link'
import { useRouter } from 'next/router'
import { Board } from '../components'
import { create_board_arr } from '../components/Board/create_board_arr'

export default function Home() {
  create_board_arr()
  return (
    <div className="flex flex-col">
      <Board />
    </div>
  )
}
