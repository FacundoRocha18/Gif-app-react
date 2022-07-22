
export const GifCard = ({ url, title }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={url} alt={title} />
      </div>
      <div className="card-header">
        <p>{title}</p>
      </div>
    </div>
  )
}
