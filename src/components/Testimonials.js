import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import imageFirst from './../assets/image/Testimonials/1.jpeg';
import imageSecond from './../assets/image/Testimonials/1.jpeg';
import imageThird from './../assets/image/Testimonials/1.jpeg';
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
          <img src={imageFirst} alt="Reviews"/>
          <div className="myCarousel">
            <h3>John Armstrong</h3>
            <h4><FormattedMessage id='testimonials.firstTitle' defaultMessage="Operations Manager - Kuafun Advisors" /></h4>
            <p>
              <FormattedMessage id='testimonials.firstDescription' defaultMessage="Lucbol has been an invaluable and strategy partner on the path to improve performance for our company. We have seen great results from starting off with just few agents!" />     
            </p>
          </div>
        </div>

        <div>
          <img src={imageSecond} alt="Reviews"/>
          <div className="myCarousel">
            <h3>Angela Richardson</h3>
            <h4><FormattedMessage id='testimonials.secondTitle' defaultMessage="Customer Relationships Manager - Akron Consumer Services" /></h4>
            <p>
              <FormattedMessage id='testimonials.secondDescription' defaultMessage="We have a fantastic experience working with Lucbol on building our core business. Their customer service reps make all the difference for our customer's satisfaction. It feels like we are all on one company, their agents are on the same page with our company values!" />
            </p>
          </div>
        </div>

        <div>
          <img src={imageThird} alt="Reviews"/>
          <div className="myCarousel">
            <h3>Eric Martinez</h3>
            <h4><FormattedMessage id='testimonials.thirdTitle' defaultMessage="Sales Director - Sol Solar" /></h4>
            <p>
              <FormattedMessage id='testimonials.thirdDescription' defaultMessage="Sales Director - Sol Solar" />           
            </p>
          </div>
        </div>
      </Carousel>
    );
  }
}