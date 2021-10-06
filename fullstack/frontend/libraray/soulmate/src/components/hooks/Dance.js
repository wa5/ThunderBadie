import React from 'react'


function useMusic(){
    console.log("music caLLED")
    return (
        <h1>on music</h1>
    )
}



function Dance() {
    var musi=useMusic()
    return (
        <>
            <h1>hello im dancing on {musi}</h1>
        </>
    )
}

export default Dance
