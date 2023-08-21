import React from 'react'
import Global from '../../components/global'

const Home = React.memo(() => {
    return (
        <Global>
            <div className='home'>
                <div className='hero'>hero</div>
                <div className='contents'>
                    <div className='welcome'>
                        Welcome to <b className='text-primary'>SunShine</b>  DayCare Center
                    </div>
                    <div className='features'>
                        <div className='row'>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>Active learning</div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>Better Environments</div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>Sport skills</div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>hey</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='motto'>
                    <div className='section'>
                        A mother's love and quality learning.
                    </div>
                </div>
            </div>
        </Global>
    )
})

export default Home