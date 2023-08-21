import React from 'react'

const Global = React.memo(({ children }) => {
    return (
        <div className='wrapper'>
            <div className='appbar'>
                <div className='left-section'>
                    <span className='logo-name'>
                        SunShine
                    </span>
                </div>
                <div className='right-section'>right</div>
            </div>
            <div className='main'>
                {children}
            </div>
            <div className='sub-footer'>
                <div className='row'>
                    <div className='col s12 m6 l4'>logo</div>
                    <div className='col s12 m6 l4'>contact</div>
                    <div className='col s12 m6 l4'>social media</div>
                </div>
            </div>
            <footer className='footer'>
                Copyright © 2023. Developed and Maintained by PamojaSoft.
            </footer>
        </div>
    )
})

export default Global