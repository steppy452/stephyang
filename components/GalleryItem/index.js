export default ({item}) => {

  const relativePath = `/static/photos/${item.src}`

  return (
    <div className="gallery-item">
      <img src={ relativePath } />

      <div className="caption">
        { item.caption } { item.icon ? <i className={ item.icon }></i> : '' }
      </div>
    </div>
  )
}
