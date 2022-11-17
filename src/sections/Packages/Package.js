import React from 'react'
import './Package.css'

const Package = () => {
  return (
    <div class="membership-section">
    <h2 class="heading-secondary ">
        <div class="u-align-center u-margin-bottom-big ">
            Membership Plans
        </div>
    </h2>
    <div class="row">
        <div class="col-1-of-3">
            <div class="plan">
                <div class="plan__side plan__side--front">
                    <div class="plan__image plan__image--1">
                        &nbsp;
                    </div>
                    <h4 class="plan__heading plan__heading--1">
                        Platinum Member
                    </h4>
                    <div class="plan__bullets">
                        <ul>
                            <li>Unlimited golf course access</li>
                            <li>Access to all club amenities</li>
                            <li>Complimentary Palmer Advantages</li>
                            <li>Complimentary spouse membership</li>
                        </ul>
                    </div>
                </div>
                <div class="plan__side plan__side--back plan__side--back-1">
                    <div class="plan__button">
                        <div class="plan__cost-box">
                            <p class="plan__cost-value">$50,000</p>
                            <p class="plan__cost-duration">/year</p>
                        </div>
                        <div class="plan__button">
                            <a href="/" class="btn btn-brown">Become a Member</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1-of-3">
            <div class="plan">
                <div class="plan__side plan__side--front">
                    <div class="plan__image plan__image--2">
                        &nbsp;
                    </div>
                    <h4 class="plan__heading plan__heading--2">
                        Junior Golfer
                    </h4>
                    <div class="plan__bullets">
                        <ul>
                            <li>Unlimited golf course access</li>
                            <li>Access to swimming pool</li>
                            <li>Complimentary Palmer Advantages</li>
                            <li>Access to tennis court</li>
                        </ul>
                    </div>
                </div>
                <div class="plan__side plan__side--back plan__side--back-2">
                    <div class="plan__button">
                        <div class="plan__cost-box">
                            <p class="plan__cost-value">$25,000</p>
                            <p class="plan__cost-duration">/year</p>
                        </div>
                        <div class="plan__button">
                            <a href="/" class="btn btn-brown">Become a Member</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-1-of-3">
            <div class="plan">
                <div class="plan__side plan__side--front">
                    <div class="plan__image plan__image--3">
                        &nbsp;
                    </div>
                    <h4 class="plan__heading plan__heading--3">
                        Social Member
                    </h4>
                    <div class="plan__bullets">
                        <ul>
                            <li>Personalized dining experience</li>
                            <li>Access to private pools</li>
                            <li>Access to tennis courts</li>
                            <li>Access to fitness center</li>
                        </ul>
                    </div>
                </div>
                <div class="plan__side plan__side--back plan__side--back-3">
                    <div class="plan__button">
                        <div class="plan__cost-box">
                            <p class="plan__cost-value">$15,000</p>
                            <p class="plan__cost-duration">/year</p>
                        </div>
                        <div class="plan__button">
                            <a href="/" class="btn btn-brown">Become a Member</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default Package