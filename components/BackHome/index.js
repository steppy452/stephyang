import Link from 'next/link'

export default () => {
  return (
    <Link prefetch href="/">
      <a className="back-arrow">
        <i className="fas fa-arrow-left"></i>
        <span className="back-arrow-text"> home</span>
      </a>
    </Link>
  )
}
