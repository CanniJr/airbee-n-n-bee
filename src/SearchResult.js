import React from 'react'
import './css/SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

function SearchResult({ // broken down props
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className='searchResult'>
            <img src={img} alt="" />
            <FavoriteBorderIcon
                className='searchResult__heart' />
            
            <div className='searchResult__info'>

                
            </div>
        </div>
    )
}

export default SearchResult
