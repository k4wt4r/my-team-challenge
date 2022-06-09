import React from 'react'
import photo1 from "./images/photo1.png"
import photo2 from "./images/photo2.png"
import photo3 from "./images/photo3.png"
import photo4 from "./images/photo4.png"
import photo5 from "./images/photo5.png"
import photo6 from "./images/photo6.png"



function TeamPage() {
    return (
        <div className='team-page'>
            <section className='headerWho-we-are'>
                <div className='title-of-team'>
                    <h1>The creative crew</h1>
                </div>
                <div>
                    <h4 className='who we are'>WHO WE ARE</h4>
                    <p className='description'>
                        We are a team of creatively diverse.
                        We are a group of people who are passionate about creating.
                    </p>

                </div>
            </section>
            <section>
                <div className="team-section">
                    <div className='card'>
                        <div className='card-bill'>
                            <img
                                src={photo1}
                                alt="Bill Mahony" />
                            <h3 className='position-of-bill'>
                                PRODUCT OWNER
                            </h3>
                        </div>
                        <h3 className='bill-s-name'>
                            Bill Mahony <br />
                        </h3>
                    </div>
                    <div className='card'>
                        <div className='card-saba'>
                            <img
                                src={photo2}
                                alt="Saba Cabrera" />
                            <h3 className='position-of-saba'>
                                ART DIRECTOR
                            </h3>
                        </div>
                        <h3 className='name-s-saba'>
                            Saba Cabrera <br />
                        </h3>
                    </div>
                    <div className='card'>
                        <div className='card-shae'>
                            <img
                                src={photo3}
                                alt="Shae Le" />
                            <h3 className='position-of-shae'>
                                TECK LEAD
                            </h3>
                        </div>
                        <h3 className='name-s-saba'>
                            Shae Le <br />
                        </h3>
                    </div>
                    <div className='card'>
                        <div className='card-Skylah Lu'>
                            <img
                                src={photo4}
                                alt="Skylah Lu" />
                            <h3 className='position-of-Skylah Lu'>
                                UX DESIGNER
                            </h3>
                        </div>
                        <h3 className='Skylah Lu-s-name'>
                            Skylah Lu <br />
                        </h3>
                    </div>
                    <div className='card'>
                        <div className='card-Griff'>
                            <img
                                src={photo5}
                                alt="Griff Richards" />
                            <h3 className='position-of-Griff'>
                                DEVELOPER
                            </h3>
                        </div>
                        <h3 className='name-s-griff'>
                            Griff Richards <br />
                        </h3>
                    </div>
                    <div className='card'>
                        <div className='card-stan'>
                            <img
                                src={photo6}
                                alt="Stan John" />
                            <h3 className='position-of-Stan'>
                                DEVELOPER
                            </h3>
                        </div>
                        <h3 className='name-s-stan'>
                            Stan John <br />
                        </h3>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TeamPage