import { useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const [lastValue, setLastValue] = useState('');

    const handleInputChange = (target) => {
        setInputValue(target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length <= 1) return console.log('El largo de la categoría debe ser mayor a 1 caracter');

        if (inputValue.trim() === lastValue.trim()) return console.log('Esa categoría ya se agregó');

        onAddCategory(inputValue.trim());
        setLastValue(inputValue);
        setInputValue('');
    }

    return (
        <>
            <form onSubmit={ (e) => handleSubmit(e)}>
                <div className="form-group-container">
                    <input type="text" placeholder="Busca una categoría" value={inputValue} onChange={({target}) => handleInputChange(target)}></input>
                    <input className='submit-button' type="submit" value="Agregar categoría"></input>
                </div>
            </form>
        </>
    )
}
