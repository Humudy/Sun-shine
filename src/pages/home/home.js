import React from 'react'
import Global from '../../components/global'

const Home = React.memo(() => {
    return (
        <Global>
            <div className='home'>
                <div className='hero'>hero</div>
                <div className='contents'>
                    <div className='title'>
                        Welcome to <b className='text-primary'>Step ups</b>  DayCare Center.
                    </div>
                    <div className='features'>
                        <div className='row'>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            local_library
                                        </i>
                                    </div>
                                    <div className='title'>Active learning</div>
                                    <span>Step ups ignite curiosity, inspire exploration, and empower children to become confident learners and thinkers.</span>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            school
                                        </i>
                                    </div>
                                    <div className='title'>Better Environments</div>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            sports_soccer
                                        </i>
                                    </div>
                                    <div className='title'>Sport skills</div>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i class="material-icons-round">
                                            palette
                                        </i>
                                    </div>
                                    <div className='title'>Nature and Outdoor Creativity</div>
                                    <span>
                                        We encourage children to engage with the natural world, sparking creativity through nature-based exploration and outdoor art.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contents'>
                    <div className='title'>
                        Meet Our <b className='text-primary'>Manager</b>.
                        <div className='features'>
                            <div className='row'>
                                <div className='col s12'>
                                    <div className='feature manager'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='motto'>
                    <div className='section'>
                        Education For Better Life.
                    </div>
                </div>
            </div>
        </Global>
    )
})

export default Home