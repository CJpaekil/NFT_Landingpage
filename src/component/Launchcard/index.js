import React from 'react'
import Carousel from 'react-grid-carousel'
import { Styles } from "./styles"
import Button from '@mui/material/Button';
const Launchcard = () => {
  return (
    <Styles>
        <div className="launch-bg">
        
                <img src="assets/images/launchcard.png" alt="" className="launch-card m-auto" width="100%" />
                <div className="card-part">
                    <div className="d-flex price">
                        <p>1.99 ETH</p>
                        <p className='dollar_price'>$6,186 USD</p>
                    </div>
                    <div className="d-flex timestamp">
                        <p>TIME REMAINING</p>
                        <p className='dollar_price'>06:02:32:42</p>
                    </div>
                    <div>
                        <img src="assets/images/player.png" alt="" className="img-david" style={{margin:'auto'}}/>
                    </div>
                    <div>
                        <p className='gold-text'>David Villa Sanchez</p>
                        <div className="d-flex" style={{ margin:'auto', justifyContent: 'center'}}>
                            <img src="assets/images/link.png" alt="" width="16"/>
                            <a className="link-text">Link to profile</a>
                        </div>
                        <p className="border-bottom-fill"></p>
                    </div>
                    <div>
                        <div className="d-flex timestamp">
                            <p>PRICE CHANGE 24H</p>
                            <p className='dollar_price' style={{color:'#6BC909'}}>+20%</p>
                        </div>
                        <div className="d-flex timestamp">
                            <p>COINS ISSUED</p>
                            <p className='dollar_price'>168.425</p>
                        </div>
                        <div className="d-flex timestamp">
                            <p>HOLDERS</p>
                            <p className='dollar_price' style={{color:'#6BC909'}}>48,789</p>
                        </div>
                    </div>
                </div>
          
            <Button variant="outlined" className="btn-buy">BUY</Button>
            <Button variant="outlined" className="btn-sell">SELL</Button>
        </div>
    </Styles>
  )
}

export default Launchcard;