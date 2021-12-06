import React, {useState} from 'react';
import './farms.scss'
import bucks from '../../img/buks.png'
import eth from '../../img/eth.png'
import view from '../../img/Vector.jpg'
import link from '../../img/link.png'
import {logDOM} from "@testing-library/react";

const Farms = () => {
    const earn = [{
        title: 'ETH/USDC',
        percent: "0,3%",
        earned: 0,
        apr: 37.2,
        liqudity: "$749 614 538",
        multiplier: 40 + "x",

    },
        {
            title: 'ETH/USDC',
            percent: "0,3%",
            earned: 0,
            apr: 37.2,
            liqudity: "$749 614 538",
            multiplier: 40 + "x",

        },
        {
            title: 'ETH/USDC',
            percent: "0,3%",
            earned: 0,
            apr: 37.2,
            liqudity: "$749 614 538",
            multiplier: 40 + "x",

        },
        {
            title: 'ETH/USDC',
            percent: "0,3%",
            earned: 0,
            apr: 37.2,
            liqudity: "$749 614 538",
            multiplier: 40 + "x",

        }]

    const [moreBtn, setMoreVBtn] = useState(false)
    // const [bgGray, setBgGray] = useState(false)
    // const openMore = (e) => {
    //
    //     setBgGray(!bgGray)
    //     Array.from(document.getElementsByClassName('earn-item__more-info')).map((a, aIdx) => {
    //         return +e.target.id === aIdx ? a.classList.toggle('active') : a
    //     })
    //     Array.from(document.getElementsByClassName('flex')).map((a, aIdx) => {
    //         return +e.target.id === aIdx ? a.classList.toggle('active') : a
    //     })
    // }

    const [openMore, setOpenMore] = useState(false)

    const openMoreFunc = (e) => {
     Array.from(document.getElementsByClassName('earn-item__more-info')).map((el, index) => {
        return e === index ? el.classList.toggle('active') : el
     })
        Array.from(document.getElementsByClassName('flex')).map((el, index) => {
            return e === index ? el.classList.toggle('active') : el
        })
        Array.from(document.getElementsByClassName('view-more')).map((el, index) => {
            return e === index ? el.classList.toggle('active') : el
        })
    }

    return (
        <div className='farms'>
            <div className="switch-btns">
                <button className="my-kyc btns "><p>Farms</p></button>
                <button className="buisness btns"><p>Pools</p></button>
            </div>
            <div className="farms__sorts">
                <div className="farms__title-block">
                    <h2 className='title'>Stake LP tokens to earn</h2>
                    <p className='subtitle'>Community Auctions →</p>
                </div>
                <div className="farms__sort-block">
                    <div className="grids">
                        <svg className='svg-icons1' width="12" height="10" viewBox="0 0 12 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M1.2 0C0.537258 0 0 0.537258 0 1.2V1.3C0 1.96274 0.537258 2.5 1.2 2.5C1.86274 2.5 2.4 1.96274 2.4 1.3V1.2C2.4 0.537259 1.86274 0 1.2 0ZM4.85 0C4.15964 0 3.6 0.559644 3.6 1.25C3.6 1.94036 4.15964 2.5 4.85 2.5H10.75C11.4404 2.5 12 1.94036 12 1.25C12 0.559644 11.4404 0 10.75 0H4.85ZM3.6 5C3.6 4.30964 4.15964 3.75 4.85 3.75H10.75C11.4404 3.75 12 4.30964 12 5C12 5.69036 11.4404 6.25 10.75 6.25H4.85C4.15964 6.25 3.6 5.69036 3.6 5ZM1.2 3.75C0.537258 3.75 0 4.28726 0 4.95V5.05C0 5.71274 0.537258 6.25 1.2 6.25C1.86274 6.25 2.4 5.71274 2.4 5.05V4.95C2.4 4.28726 1.86274 3.75 1.2 3.75ZM3.6 8.75C3.6 8.05964 4.15964 7.5 4.85 7.5H10.75C11.4404 7.5 12 8.05964 12 8.75C12 9.44036 11.4404 10 10.75 10H4.85C4.15964 10 3.6 9.44036 3.6 8.75ZM1.2 7.5C0.537258 7.5 0 8.03726 0 8.7V8.8C0 9.46274 0.537258 10 1.2 10C1.86274 10 2.4 9.46274 2.4 8.8V8.7C2.4 8.03726 1.86274 7.5 1.2 7.5Z"
                                  fill="#133D65"/>
                        </svg>
                        <svg className='svg-icons' width="14" height="10" viewBox="0 0 14 10" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M0 1C0 0.447715 0.447715 0 1 0H3C3.55228 0 4 0.447715 4 1V3C4 3.55228 3.55228 4 3 4H1C0.447715 4 0 3.55228 0 3V1ZM5 1C5 0.447715 5.44772 0 6 0H8C8.55229 0 9 0.447715 9 1V3C9 3.55228 8.55229 4 8 4H6C5.44772 4 5 3.55228 5 3V1ZM11 0C10.4477 0 10 0.447715 10 1V3C10 3.55228 10.4477 4 11 4H13C13.5523 4 14 3.55228 14 3V1C14 0.447715 13.5523 0 13 0H11ZM11 6C10.4477 6 10 6.44772 10 7V9C10 9.55229 10.4477 10 11 10H13C13.5523 10 14 9.55229 14 9V7C14 6.44772 13.5523 6 13 6H11ZM6 6C5.44772 6 5 6.44772 5 7V9C5 9.55229 5.44772 10 6 10H8C8.55229 10 9 9.55229 9 9V7C9 6.44772 8.55229 6 8 6H6ZM1 6C0.447715 6 0 6.44772 0 7V9C0 9.55229 0.447715 10 1 10H3C3.55228 10 4 9.55229 4 9V7C4 6.44772 3.55228 6 3 6H1Z"
                                  fill="#133D65"/>
                        </svg>
                    </div>
                    <div className="stake">
                        <span className="stake-title">Stake only</span>
                    </div>
                    <div className="toggle-switch">
                        <span className='switch-title'>Live</span>
                        <span className='switch-title'>Finished</span>
                    </div>
                    <div className="sort-by">
                        <span>Sort by</span>
                        <select name="" id="">
                            <option value="">Hot</option>
                            <option value="">New</option>
                            <option value="">Old</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="farms__earn">
                {
                    earn.map((el, idx) => (

                            <div className="earn-item" key={idx}>

                                <div className='flex' onClick={() => openMoreFunc(idx)} id={idx}>
                                    <div className="item-title">
                                        <img src={eth} className='title-img1' alt=""/>
                                        <img src={bucks} className='title-img2' alt=""/>
                                        <span className='title-name'>{el.title}<span className='percent'>{el.percent}</span></span>
                                    </div>
                                    <div className="earnings">
                                        <div className="earnings-item">
                                            <span className='earn-item-title'>Earned</span>
                                            <span className='earn-item-number'>{el.earned}</span>
                                        </div>
                                        <div className="earnings-item">
                                            <span className='earn-item-title'>APR</span>
                                            <span className='earn-item-number'>{el.apr}%</span>
                                        </div>
                                        <div className="earnings-item">
                                            <span className='earn-item-title'>Liqudity</span>
                                            <span className='earn-item-number'>{el.liqudity}</span>
                                        </div>
                                        <div className="earnings-item">
                                            <span className='earn-item-title'>Multiplier</span>
                                            <span className='earn-item-number'>{el.multiplier}</span>
                                        </div>
                                        <button className= 'view-more '><img src={view}
                                                                                                            alt=""/>
                                        </button>
                                    </div>
                                </div>
                                <div id={idx} className='earn-item__more-info' onClick={() => openMoreFunc(idx)}>
                                    <div className="links">
                                        <a className='link' href="">Get ETH-USDC<img className='img' src={link} alt=""/></a>
                                        <a className='link' href="">View Contract <img className='img' src={link} alt=""/></a>
                                        <a className='link' href="">See Pair Info <img className='img' src={link} alt=""/></a>
                                    </div>
                                    <div className="earn-item__farm-btns">
                                        <div className="earned-counter">
                                            <span className="counter-name">ETH EARNED</span>
                                            <span className="counter-count">0.0</span>
                                        </div>
                                        <button className="farm-btn">Harvest</button>
                                        <button className="farm-btn active">Start Farm</button>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }

            </div>

        </div>
    );
};

export default Farms;