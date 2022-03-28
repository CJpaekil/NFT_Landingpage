import Button from '@mui/material/Button';
import { Styles } from './NFTcard/styles';
import { useState } from 'react';
export default function Footer() {
    const [activeItem, setActiveItem] = useState(2);
    return (
    <Styles>
        <div style={{ background: '#222435', height: ' 70px', width: '100%', position:'relative' }}>
            <div style={{position:'absolute', left:'10px', bottom: '23px'}}>
                <img src="assets/images/Logo with yellow contour 782_1000px.png" alt="" width="70" />
            </div>
            <div className="row d-flex" style={{position:'absolute', right:'10px'}}>
                <div className='col-4 btn-setting'>
                    <button className={`btn-footer ${activeItem === 0 ?  " active" : "" }`} variant="outlined" onClick={() => setActiveItem(0)}>
                        <img src="assets/images/player_btn.png" alt="" width="30" />
                        <span className="footer-btn-text">PLAYERS</span>
                    </button>
                </div>
                <div className='col-4 btn-setting'>
                    <button className={`btn-footer ${activeItem === 1 ?  " active" : "" }`} variant="outlined" onClick={() => setActiveItem(1)}>
                        <img src="assets/images/nfts_btn.png" alt="" width="28" />
                        <span className="footer-btn-text">NFTS</span>
                    </button>
                   
                </div>
                <div className='col-4 btn-setting'>
                    <button className={`btn-footer ${activeItem === 2 ?  " active" : "" }`} variant="outlined" onClick={() => setActiveItem(2)}>
                        <img src="assets/images/sign_btn.png" alt="" width="28" />
                        <span className="footer-btn-text">SIGN IN</span>
                    </button>
                </div>
            </div>
        </div>
    </Styles>
    
    )
}