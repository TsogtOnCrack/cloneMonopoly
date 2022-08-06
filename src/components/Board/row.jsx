import Card from '../MonopolyCard/card'

export const Row = (props) => {
  const { row, ind } = props
  return (
    <div className="flex ">
      {row.map((el) => {
        if (el == 0) {
          return <div className="w-[70px] h-[70px]">{el}</div>
        } else {
            return <Card name = {el} />
        }
      })}
    </div>
  )
}
