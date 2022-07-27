export const Typography = (props) => {
  const { variants, children, className } = props

  console.log(variants)

  const getStyle = () => {
    switch (variants) {
      case 'main-small':
        return 'font-bold text-[10px]'
      case 'main-big':
        return 'font-bold text-[25px]'
    
    }
  }


  return <div className={` ${className}  ${getStyle()}  text-center `}>{children}</div>
}

export default Typography
