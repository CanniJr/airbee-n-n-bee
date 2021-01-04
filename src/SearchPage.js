import { Button } from '@material-ui/core'
import React from 'react'
import './css/SearchPage.css'
import SearchResult from './SearchResult'

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 stays • 2 guests</p>
                <h1>Stays nearby</h1>
                <Button 
                    variant='outlined'>Cancellation Flexibility</Button>
                <Button
                    variant='outlined'>Type of place</Button>
                <Button
                    variant='outlined'>Price</Button>
                <Button
                    variant='outlined'>Rooms and Beds</Button>
                <Button
                    variant='outlined'>More filters</Button>
            </div>
            <SearchResult
                img='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                location='Whole apartment in North Williamsburg'
                title='Spacious 2 bedroom loft'
                description='2 guests • 2 bedrooms • 1.5 shared bathroom • wifi • kitchen • street parking'
                star={4.5}
                price='$150 / night'
                total='$210 total'
                />
            <SearchResult
                img='https://images.unsplash.com/photo-1554995207-c18c203602cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cm9vbXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80'
                location='Whole apartment in North Williamsburg'
                title='Spacious 2 bedroom loft'
                description='2 guests • 2 bedrooms • 1.5 shared bathroom • wifi • kitchen • street parking'
                star={4.5}
                price='$150 / night'
                total='$210 total'
            />
        </div>
    )
}

export default SearchPage
