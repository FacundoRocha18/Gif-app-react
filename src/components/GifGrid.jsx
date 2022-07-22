
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifCard, Loading} from './';

export const GifGrid = ({ category, onDeleteCategory }) => {

    const { gifs, isLoading } = useFetchGifs( category );

    if ( isLoading === true ) return (
        <>
            <div className="loading-indicator">
                <Loading />
            </div>
        </>
    )

    if ( isLoading === false ) return (
        <>
                {
                    <>
                        <div className="gif-grid-header">
                            <h4 className="gif-grid-title">{category}</h4>
                            <button className="delete-category-button" onClick={() => onDeleteCategory(category)}>
                                <span className="material-icons">
                                    delete
                                </span>
                            </button>
                        </div>
                        <div className="gif-grid">
                            {
                                gifs.map((gif) => {
                                    return <GifCard
                                        key={gif.id}
                                        {...gif}
                                    />
                                })
                            }
                        </div>
                    </>
                }
            </>
        )
    
}