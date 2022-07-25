import PropTypes from 'prop-types'

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

GifCard.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}
