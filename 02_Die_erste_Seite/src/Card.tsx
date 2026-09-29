import React from 'react'

type Props = {}

export default function Card({ }: Props) {
    return (
        <div className='card'>
            <h2>Susi</h2>
            <img src="https://www.hchard.at/wp-content/uploads/2015/09/Sebastian-Kainz-640x360.jpg" alt="" />
            <p>made by andi</p>
        </div>
    )
}