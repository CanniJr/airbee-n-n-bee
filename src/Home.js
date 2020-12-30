import React from 'react'
import Banner from './Banner'
import Card from './Card'
import './css/Home.css'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
                <Card
                    image='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    title='Hangout spot in SoCal'
                    info='Beautiful 3 bedroom house with a pool'
                    price='$200/night'
                />
                <Card
                    image='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    title='Hangout spot in SoCal'
                    info='Beautiful 3 bedroom house with a pool'
                    price='$200/night'
                 
                />
                <Card
                    image='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvcGVydHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60'
                    title='Hangout spot in SoCal'
                    info='Beautiful 3 bedroom house with a pool'
                    price='$200/night'
                />
            </div>
            <div className='home__section'>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Home
