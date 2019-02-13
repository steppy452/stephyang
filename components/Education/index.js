export default ({ edu }) => {
  return (
    <div className="resume-block">
      <div className="education-info">
        <span className="strong">{ edu.school }</span> |
        { edu.location } -
        <span className="emphasis">{ edu.major }</span>
        <div className="time-period">{ edu.time }</div>
      </div>

      <p>{ edu.blurb }</p>
    </div>
  )
}
