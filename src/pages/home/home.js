import React from 'react'
import Global from '../../components/global'
import image from '../../static/mama.png'

const Home = React.memo(() => {
    return (
        <Global>
            <div className='home'>
                <div className='hero'></div>
                <div className='contents'>
                    <div className='title'>
                        Karibu <b className='text-primary'>Sunshine</b>  DayCare Center.
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
                                    <span>Sunshine tunatumia mbinu mpya na za kisasa za kujifunza. Kupitia mbinu hizi, watoto wanahamasishwa kushiriki kikamilifu katika kujifunza kupitia michezo, majaribio, na kuwahimiza kutumia akili zao kwa ubunifu.</span>
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
                                    Sunshine ina mazingira mazuri ya kujifunza kwa watoto. Madarasa yenye vifaa vya kisasa na maeneo ya nje yenye kuchangia katika kufanya mchakato wa kujifunza kuwa wa kuvutia na wa kufurahisha kwa watoto.
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
                                    Sunshine inaamini katika ushirikiano wa karibu kati ya shule na wazazi. Shule hutoa fursa kwa wazazi kujihusisha na mchakato wa elimu ya watoto wao ili kujenga mahusiano thabiti na wazazi.
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
                    <div className='row'>
                        <div className='col s12 l6 image1'></div>
                        <div className='col s12 l6 image2'> </div>
                    </div>
                </div>
                <div className='contents'>
                    <div className='title'>
                        Meneja wa shule.
                        <div className='features'>
                            <div className='feature manager'>
                                <div className='image'>
                                    <img src={image} alt='mama' />
                                </div>
                                <div className='desc'>
                                    Madam Witness Foya ni meneja wa shule mwenye uzoefu na ujuzi katika uongozi wa elimu. Yeye ni mtu mwenye shauku ya kuleta mabadiliko chanya katika mazingira ya kujifunza. Kupitia uongozi wake, amejenga mazingira ya shule yenye motisha na yenye kusisimua kwa wanafunzi na walimu. Madam Witness Foya anatambulika kwa uwezo wake wa kusikiliza na kushirikiana na jamii ya shule, pamoja na kuweka msisitizo kwa maendeleo ya kielimu na maadili kwa wanafunzi. Yeye ni mfano wa kuigwa kwa kujitolea kwake kwa ajili ya kuendeleza elimu bora na ukuaji wa kibinafsi kwa kila mwanafunzi.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='motto'>
                    <div className='section'>
                        Upendo wa mama na elimu bora.
                    </div>
                </div>
                <div className='location'>
                    <span>
                        Shule yetu inajivunia kuwa na walimu waliohitimu na wenye uzoefu, ambao hujali na kusaidia kukuza ukuaji wa kila mtoto. Walimu wetu wanashirikiana na wazazi katika kufuatilia maendeleo ya wanafunzi na kuhakikisha wanapata msaada unaohitajika.
                    </span>
                    <span>
                        Shule inapatikana maeneo ya mfuruni, kata ya Tungi, Morogoro mjini karibu na jengo la ofisi za NIDA mkoa.
                    </span>
                </div>
            </div>
        </Global>
    )
})

export default Home