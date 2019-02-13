export default ({ work }) => {
  return (
    <div className="resume-block">
      <div className="work-info">
        <span className="strong">{ work.company }</span> |
        { work.location } -
        <span className="emphasis">{ work.position }</span>
        <div className="time-period">{ work.time }</div>
      </div>

      <ul>
        {
          work.responsibilities.map( responsibility => {
            return <li>{ responsibility }</li>
          })
        }
      </ul>
    </div>
  )
}
