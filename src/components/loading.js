import React, { useState, useEffect } from 'react'


function Loading() {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
      setTimeout(() => setLoading(false), 6000)
    }, [])

    
    return(

        <>
    {loading === false ? (
        <div>
            <div >
            <h1> I want this to do something</h1></div>
           
        </div>
    )  : (
        <div class="loading">
            <div class="logo">
                    <img src="./img/pokeball_background.jpg" alt='loading'/>
            </div>
            <div class="preload-title">
                Hold on, it's loading!
            </div>
        </div>
      )}
      </>
    )
}

export default Loading