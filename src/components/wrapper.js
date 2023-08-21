import React from 'react'

const Wrapper = React.memo((props) => {
    return (
        <main>
            {props.children}
        </main>
    )
})

export default Wrapper