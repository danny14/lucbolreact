import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageFirst from './../assets/image/Testimonials/1.jpeg';
import imageSecond from './../assets/image/Testimonials/2.jpeg';
import imageThird from './../assets/image/Testimonials/3.jpeg';
import {FormattedMessage} from 'react-intl';

export default class Testimonials extends Component {
  render() {
    return (
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src={imageFirst} alt="John Armstrong - Operations Manager"/>
          <div className="myCarousel">
            <h3>John Armstrong</h3>
            <h4><FormattedMessage id='testimonials.firstTitle' defaultMessage="Operations Manager - Kuafun Advisors" /></h4>
            <p>
              <FormattedMessage id='testimonials.firstDescription' defaultMessage="Lucbol has been an invaluable and strategic partner on the path to improving performance for our company. We have seen great results when starting off with just a few agents!" />     
            </p>
          </div>
        </div>

        <div>
          <img src={imageSecond} alt="Angela Richardson - Customer Relationships Manager"/>
          <div className="myCarousel">
            <h3>Angela Richardson</h3>
            <h4><FormattedMessage id='testimonials.secondTitle' defaultMessage="Customer Relationships Manager - Akron Consumer Services" /></h4>
            <p>
              <FormattedMessage id='testimonials.secondDescription' defaultMessage="We are having a fantastic experience working with Lucbol  in building our core business. Their customer service reps make all the difference for our customer satisfaction. It feels like we are all in one company, their agents are on the same page with our company values!" />
            </p>
          </div>
        </div>

        <div>
          <img src={imageThird} alt="Eric Martinez - Sales Director"/>
          <div className="myCarousel">
            <h3>Eric Martinez</h3>
            <h4><FormattedMessage id='testimonials.thirdTitle' defaultMessage="Sales Director - Sol Solar" /></h4>
            <p>
              <FormattedMessage id='testimonials.thirdDescription' defaultMessage="Lucbol is not an outsourced company for us - they're vital for our daily operations. Their Spanish-speaking representatives have been our voice for the Latino market in the US. Lucbol is the reason why our company has grown over 40% year to date!" />           
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}