import { House } from '@mui/icons-material'
import { Typography } from '..'
import { db } from 'components/Board/out'
import { Special } from './specialCard'

const decodeVisit = (visitor) => {
  switch (visitor) {
    case '':
      return ''
    case 'blue':
      return '[#44CCFF]'
    case 'red':
      return '[#EA001E]'
    case 'green':
      return '[#35FF69]'
    case 'yellow':
      return '[#FFD449]'
  }
}
const decodeOwner = (owner) => {
  switch (owner) {
    case '':
      return ''
    case 'blue':
      return 'border-[#44CCFF]'
    case 'red':
      return 'border-[#EA001E]'
    case 'green':
      return 'border-[#35FF69]'
    case 'yellow':
      return 'border-[#FFD449]'
  }
}
const decodeCard = (name) => {
  switch (name) {
    case '':
      return ''
    case 'Go':
      return 'Go'
    case 'Just visiting':
      return 'Just visiting'
    case 'Free Parking':
      return 'Free Parking'
    case 'GO TO JAIL':
      return 'GO TO JAIL'
  }
}

const get_location_data = (data, name) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].Name == name) {
      return data[i]
    }
  }
}

export default function Card(props) {
  const data = db
  const { name } = props

  const card = get_location_data(db, name)

  if (decodeCard(name) != undefined) {
    return <Special name={decodeCard(name)} />
  } else {
    return (
      <div
        className={` bg-red-300 flex flex-col justify-between border-[2px] ${
          card.Owner.name != '' ? decodeOwner(card.Owner) : 'border-black '
        }`}
        
      >

        <div 
        className='w-[70px] h-[110px]'
        style={{
          transform: `rotate(${card.deg}deg)`,
        }}>
        <div className="h-[22%] w-full bg-[#945F48] border-black border-b-[2px] flex flex-row px-1 justify-around items-center">
          {card.Property.map((el) => {
            return (
              <div
                className={` h-[13px] ${
                  el.value == 'House' ? 'bg-[#00D637] w-[13px]' : 'bg-[#EA001E] w-[30px]'
                } border-[2px] border-white `}
              ></div>
            )
          })}
        </div>

        <div className="h-[78%] w-full bg-[#C1E1D4] flex flex-col justify-center">
          <Typography variants={card.big ? 'main-big' : 'main-small'}>{card.Name}</Typography>
          <div className="h-[15%] w-full flex flex-row justify-around items-center px-2 ">
            {card.Visiters.map((el) => {
              return <div className={` w-[10px] h-[10px] bg-${decodeVisit(el.color)} `}></div>
            })}
          </div>
          <Typography variants={card.big ? 'main-big' : 'main-small'}>{card.Price}</Typography>
        </div>
        </div>
      </div>
    )
  }
}
