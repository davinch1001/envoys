import React from 'react';
import './confirm.scss'
import back from '../../img/back.png'
import eth from '../../img/eth.png'
import vector from '../../img/Group.png'
import swap from '../../img/swap-down.png'
import Form from "../form/form";

const Confirm = () => {
    return (
        <div className='confirm'>
          <div className="confirm__header">
              <div className="confirm__header-titles">
                  <span className="confirm__header-title">Confirm Swap</span>
                  <span className="confirm__header-subtitle">Trade tokens in an instant</span>
              </div>
              <button className="confirm__go-back-btn"><img src={back} alt=""/></button>
          </div>
            <div className="confirm__exchange-token">
                <div className="confirm__exchange-token-a">
                    <div className='confirm__exchange-token-title'>
                        <img src={eth} alt="" className="token-a-img"/>
                        <span className="token-a-name">ETH</span>
                    </div>
                    <span>0.050500034</span>
                </div>
                <button className="confirm__swap-down">
                    <img src={swap} alt=""/>
                </button>
                <div className="confirm__exchange-token-a">
                    <div className='confirm__exchange-token-title'>
                        <img src={vector} alt="" className="token-a-img"/>
                        <span className="token-a-name">ETH</span>
                    </div>
                    <span>0.050500034</span>
                </div>
            </div>
            <div className="confirm__price-update">
                <span className="confirm__price-update-title">Price Update</span>
                <button className="confirm__accept-btn">Accept</button>
            </div>

            <p className="confirm__desc">
                Output is estimated. You will receive at least 1.77691 ETH or the transaction will revert.
            </p>

            <div className="confirm__report">
                <div className="report-block">
                    <span className="name">Price</span>
                    <span className="value">22.3501 ETH / USDC </span>
                </div>
                <div className="report-block">
                    <span className="name">Minimum received</span>
                    <span className="value">1.776 USDC</span>
                </div>
                <div className="report-block">
                    <span className="name">Price Impact</span>
                    <span className="value impact">0.001% </span>
                </div>
                <div className="report-block">
                    <span className="name">Liquidity Provider Fee</span>
                    <span className="value">0.000199752 ETH </span>
                </div>

            </div>

            <button className="confirm__swap">
                Confirm swap
            </button>
        </div>
    );
};

export default Confirm;