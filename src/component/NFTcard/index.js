import React from 'react'
import Carousel from 'react-grid-carousel'
import { Styles } from "./styles"
const NFTcard = () => {
  return (
    <Styles>
        <div className='card-bg'>
        <img src="assets/images/2.png" alt="" className="m-auto" width="100%" />
            <div className="card-part">
                <div>
                    <p className="middle">DAVID VILLA SANCHEZ</p>
                    <p className="title">Football Jersey</p>
                    <p className="title">#4738</p>
                </div>
                <p className="border-bottom"></p>
                <div>
                    <div className='d-flex' style={{position:'relative'}}>
                        <p>Owner:</p>
                        <p className="dollar_price">0xd134d62D42EC...</p>
                    </div>
                    <div className='d-flex' style={{position:'relative'}}>
                        <p>Mint Date:</p>
                        <p className="dollar_price">16.02.2022</p>
                    </div>
                </div>
            </div>
        </div>
    </Styles>
  )
}

export default NFTcard;