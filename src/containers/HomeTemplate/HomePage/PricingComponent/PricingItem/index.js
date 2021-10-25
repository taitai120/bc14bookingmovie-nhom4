import React from "react";

export default function PricingItem(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="pricing-item">
        <div className="pricing-info">
          <div className="pricing-type">
            {props.type ? props.type : "Basic"}
          </div>
          <div className="pricing-price">
            {props.price ? props.price : "Free"}
          </div>
        </div>

        <div className="pricing-option-list">
          <div className="pricing-option-item">Movie Originals</div>
          <div className="pricing-option-item">
            Switch plans or cancel anytime
          </div>
          <div className="pricing-option-item">Stream 65+ top live</div>
          <div className="pricing-option-item">TV channels</div>
        </div>

        <div className="btn-register">
          <button className="btn">Register Now</button>
        </div>
      </div>
    </div>
  );
}
