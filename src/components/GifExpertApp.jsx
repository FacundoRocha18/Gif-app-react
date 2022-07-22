import { useState, useEffect } from 'react'
import { AddCategory, GifGrid } from '../components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch man']);

    useEffect(() => {
        
    }, [categories])
    

    const onAddCategory = (newCategory) => {

        if (categories.length <= 10) setCategories([newCategory, ...categories])
    }

    const onDeleteCategory = (category) => {

        if (categories.length >= 1) setCategories(categories.filter((cat) => cat !== category))
        
    }

    return (
        <>
            {
                <div className="main-container">
                    <h1>Gif App</h1>
                    <AddCategory
                        onAddCategory={(value) => onAddCategory(value)}
                        onDeleteCategory={(value) => onDeleteCategory(value)}
                    />
                    <div className="grid-container">
                        {
                            categories.map(category => {
                                return <GifGrid
                                    key={category}
                                    category={category}
                                    onDeleteCategory={onDeleteCategory}
                                />
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
}