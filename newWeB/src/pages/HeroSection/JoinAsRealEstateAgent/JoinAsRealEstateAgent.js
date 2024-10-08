import React from 'react'
import './JoinAsRealEstateAgent.css'

const JoinAsRealEstateAgent = () => {
    return (
        <section style={{ backgroundColor: "rgba(213, 46, 50, 1)",height:"300px",marginTop:"176px"}}> 
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='agents__consult--thumb'><img src="assets/3d-view-house-model 1.png" /></div>
                        
                    </div>
                    <div className='col-md-6 ' style={{paddingTop:"20px"}}>
                        <h2 className='text-white'>Want To Become A Real Estate Agent?</h2>
                        <p className='text-white'>We'll help you to grow your career and growth.</p>
                        <button className="agent-button">Click Here</button>
                    </div>
                </div>

            </div>
        </section>

    )
}

export default JoinAsRealEstateAgent