import { House } from '@mui/icons-material'
import { Typography } from '..'

const db = {
  card: {
    BalticAvenue: {
      Name: 'Baltic Avenue',
      Price: 'M60',
      Big: false,
      //   Property: [{ value: "House" }, { value: "House" }, { value: "House" }, { value: "House" }],
      Property: [{ value: 'Hotel' }],
      Visiters: [
        { name: 'tsogt', color: 'red' },
        { name: 'mandal', color: 'blue' },
        { name: 'mandal', color: 'yellow' },
        { name: 'mandal', color: 'green' },
      ],
      Owner: { name: '', color: '' },
    },
  },
}

export default function Card(props) {
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

  const data = db.card.BalticAvenue

  return (
    <div
      className={`w-[70px] h-[110px] bg-red-300 flex flex-col justify-between border-[2px] ${
        data.Owner.name != '' ? decodeOwner(data.Owner.color) : 'border-black'
      } `}
    >
      <div className="h-[22%] w-full bg-[#945F48] border-black border-b-[2px] flex flex-row px-1 justify-around items-center">
        {data.Property.map((el) => {
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
        <Typography variants={data.big ? 'main-big' : 'main-small'}>{data.Name}</Typography>
        <div className="h-[15%] w-full flex flex-row justify-around items-center px-2 ">
          {data.Visiters.map((el) => {
            return <div className={` w-[10px] h-[10px] bg-${decodeVisit(el.color)} `}></div>
          })}
        </div>
        <Typography variants={data.big ? 'main-big' : 'main-small'}>{data.Price}</Typography>
      </div>
    </div>
  )
}
