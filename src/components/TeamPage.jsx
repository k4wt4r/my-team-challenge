import React from 'react'
import photo1 from "./images/photo1.png"
import photo2 from "./images/photo2.png"
import photo3 from "./images/photo3.png"
import photo4 from "./images/photo4.png"
import photo5 from "./images/photo5.png"
import photo6 from "./images/photo6.png"
import "../TeamPage.css"



function TeamPage() {
    return (
        <>
            <div className='team-page'>

                <div className='headerWho-we-are'>
                    <div className='container'>
                        <div className='title-of-team'>
                            <h1>The creative crew</h1>
                        </div>
                        <div className='title-description'>
                            <h4 className='who-we-are'>WHO WE ARE</h4>
                            <p className='description'>
                                We are a team of creatively diverse.
                                We are a group of people who are passionate about creating.
                            </p>

                        </div>
                    </div>
                </div>
                <section className='team-section'>
                    <div className="team-members">
                        <div className='container-cards'>
                            <div className='cards'>
                                <div className='card-bill'>
                                    <img
                                        src={photo1}
                                        alt="Bill Mahony" />
                                    <h3 className='position'>
                                        PRODUCT OWNER
                                    </h3>
                                </div>
                                <h3 className='name'>
                                    Bill Mahony <br />
                                </h3>
                            </div>
                            <div className='cards'>
                                <div className='card-saba'>
                                    <img
                                        src={photo2}
                                        alt="Saba Cabrera" />
                                    <h3 className='position'>
                                        ART DIRECTOR
                                    </h3>
                                </div>
                                <div className='name'>
                                    <h3 className='name-saba'>
                                        Saba Cabrera <br />
                                    </h3>
                                </div>
                            </div>
                            <div className='cards'>
                                <div className='card-Le'>
                                    <img
                                        src={photo3}
                                        alt="Shae Le" />
                                    <h3 className='position'>
                                        TECK LEAD
                                    </h3>
                                </div>
                                <h3 className='name'>
                                    Shae Le <br />
                                </h3>
                            </div>
                            <div className='cards'>
                                <div className='card-Lu'>
                                    <img
                                        src={photo4}
                                        alt="Skylah Lu" />
                                    <h3 className='position'>
                                        UX DESIGNER
                                    </h3>
                                </div>
                                <div className='name'>
                                    <h3 className='name-Lu'>
                                        Skylah Lu <br />
                                    </h3>
                                </div>
                            </div>
                            <div className='cards'>

                                <div className='card-Griff'>
                                    <img
                                        src={photo5}
                                        alt="Griff Richards" />
                                    <h3 className='position'>
                                        DEVELOPER
                                    </h3>
                                </div>
                                <h3 className='name-Griff'>
                                    Griff Richards <br />
                                </h3>

                            </div>
                            <div className='cards'>
                                <div className='card-Stan'>
                                    <img
                                        src={photo6}
                                        alt="Stan John" />
                                    <h3 className='position'>
                                        DEVELOPER
                                    </h3>
                                </div>
                                <div className='name'>
                                    <h3 className='name-Stan'>
                                        Stan John <br />
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                {/* <div className='footer-container'>
                    created by <a href="https://github.com/k4wt4r">k4wt4r</a> -devChallenges.io
                </div> */}

            </div>



        </>
    )
}

export default TeamPage