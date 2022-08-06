import { dividerClasses } from '@mui/material'
import {allStops} from "./allstops"

const arr_len_lim = 11

const create_an_array = () => {
  let arr = []
  for (let i = 0; i < arr_len_lim; i++) {
    let temp = []
    for (let j = 0; j < arr_len_lim; j++) {
      temp.push(0)
    }
    arr.push(temp)
  }
  return arr
}

export const create_board_arr = () => {
  let board_array = create_an_array()

  let j = 0
  for (let i = arr_len_lim-1; i > -1; i--) {
    board_array[arr_len_lim-1][i] = allStops[j]
    j++
  }

  j = 11
  for(let i = arr_len_lim-2 ; i > -1 ; i --){
    board_array[i][0] = allStops[j]
    j++
  }

  j=21
  for(let i = 1 ; i < arr_len_lim ; i ++){
    board_array[0][i] = allStops[j]
    j++
  }
  j = 31
  for(let i = 1 ; i < arr_len_lim-1 ; i ++){
    board_array[i][arr_len_lim-1] = allStops[j]
    j++
  }


  console.log(board_array)
  return board_array
}
