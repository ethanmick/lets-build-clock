type Props = {
  time: Date
}
const Time = ({ time }: Props) => {
  return (
    <span>
      {time.toLocaleTimeString(undefined, {
        hour: 'numeric',
        minute: '2-digit'
      })}
    </span>
  )
}

export default Time
