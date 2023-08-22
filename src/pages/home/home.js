import React from 'react'
import Global from '../../components/global'

const Home = React.memo(() => {
    return (
        <Global>
            <div className='home'>
                <div className='hero'></div>
                <div className='contents'>
                    <div className='title'>
                        Karibu <b className='text-primary'>Step ups</b>  DayCare Center.
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
                                    <div className='title'>Mbinu Mpya za Kujifunza</div>
                                    <span>Step Ups tunatumia mbinu mpya na za kisasa za kujifunza. Kupitia mbinu hizi, watoto wanahamasishwa kushiriki kikamilifu katika kujifunza kupitia michezo, majaribio, na kuwahimiza kutumia akili zao kwa ubunifu.</span>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            school
                                        </i>
                                    </div>
                                    <div className='title'>Mazingira Bora ya Kujifunza</div>
                                    <span>
                                        Step Ups ina mazingira mazuri ya kujifunza kwa watoto. Madarasa yenye vifaa vya kisasa na maeneo ya nje yenye kuchangia katika kufanya mchakato wa kujifunza kuwa wa kuvutia na wa kufurahisha kwa watoto.
                                    </span>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            groups
                                        </i>
                                    </div>
                                    <div className='title'>Ushirikiano wa Karibu na Wazazi</div>
                                    <span>
                                        Step Ups inaamini katika ushirikiano wa karibu kati ya shule na wazazi. Shule hutoa fursa kwa wazazi kujihusisha na mchakato wa elimu ya watoto wao ili kujenga mahusiano thabiti na wazazi.
                                    </span>
                                </div>
                            </div>
                            <div className='col s12 m6 l3'>
                                <div className='feature'>
                                    <div className='icon'>
                                        <i className="material-icons-round">
                                            psychology
                                        </i>
                                    </div>
                                    <div className='title'>Kuimarisha Uwezo wa Kufikiri</div>
                                    <span>
                                        Shule hii inazingatia kuendeleza uwezo wa kufikiri wa watoto. Programu zake zinajikita katika kukuza uwezo wa kufikiri kwa undani, kuchambua mambo kwa makini, na kutatua matatizo kwa njia inayojenga ujasiri na ufanisi.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='descriptions'>
                    <span>
                        Shule yetu inajivunia kuwa na walimu waliohitimu na wenye uzoefu, ambao hujali na kusaidia kukuza ukuaji wa kila mtoto. Walimu wetu wanashirikiana na wazazi katika kufuatilia maendeleo ya wanafunzi na kuhakikisha wanapata msaada unaohitajika.
                    </span>
                </div>
                <div className='contents'>
                    <div className='title'>
                        Meneja wa shule.
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
                        Elimu kwa Maisha Bora.
                    </div>
                </div>
                <div className='location'>
                    <span>
                        Tunapatikana katika majengo ya Sabasaba, Morogoro mjini karibu na ukumbi wa vijana social.
                    </span>
                </div>
            </div>
        </Global>
    )
})

export default Home