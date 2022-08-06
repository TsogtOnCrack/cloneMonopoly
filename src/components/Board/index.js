import { create_board_arr } from './create_board_arr'
import {Row} from "./row"

export const Board = () => {

  const arr_board = create_board_arr()

  console.log(arr_board)

  return (
    <div>
      what the fuckd
      <div className=" w-[1004px] h-[1004px] bg-yellow-400 flex flex-wrap border-[2px] border-black">
        {

            arr_board.map((el, index) => {
              return <Row ind = {index} row = {el} />
            })
        }
      </div>
    </div>
  )
}

export default Board
