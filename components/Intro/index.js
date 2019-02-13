import Link from 'next/link'

export default ({data}) => {

  const mailToLink = `mailto:${data.email}`

  return (
    <div className="intro fade-in">
      <div className="intro-text">
        <Link href="/">
          <a>
            { data.name.first }<span className="highlight">{ data.name.last }</span>
          </a>
        </Link>
      </div>

      <div className="sayhello-email">
        <i className="fa fa-envelope"></i> <a href={ mailToLink }>{ data.email }</a>
      </div>
    </div>
  )
}
