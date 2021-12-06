import React from 'react';
import './selectToken.scss'
import tokenIcon from '../../img/eth-big.png'
import back from '../../img/back.png'
import lupa from '../../img/lupa.png'

const SelectToken = () => {
    const tokens = [
        {icons: tokenIcon, tokenName: "ETH"},
        {icons: tokenIcon, tokenName: "ETH"},
        {icons: tokenIcon, tokenName: "ETH"},
        {icons: tokenIcon, tokenName: "ETH"},
        {icons: tokenIcon, tokenName: "ETH"},
    ]
    return (
        <div className='select-token'>
            <div className="select-token__header">
                <h2 className='select-token__title'>Select Token</h2>
                <button className='select-token__go-back-btn'><img src={back} alt=""/></button>
            </div>
            <div className="select-token__input-block">
                <img src={lupa} className='select-token-lupa' alt=""/>
                <input className='select-token-input' placeholder='Search name or paste address' type="text"/>
            </div>
            <div className="select-token__items">
            {
                tokens.map((el, idx) => (
                    <div className='select-token__item'>
                        <img className='token-img' src={el.icons} alt=""/>
                        <div>
                            <span className='token-name'>{el.tokenName}</span>
                            <span className='token-subtitle'>{el.tokenName}</span>
                        </div>
                        </div>

                ))
            }
            </div>

            <button className="select-token__manage-token">Manage Token</button>

        </div>
    );
};

export default SelectToken;