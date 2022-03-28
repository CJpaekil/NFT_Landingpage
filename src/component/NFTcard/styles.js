import styled from 'styled-components';

export const Styles = styled.div`
.border-bottom
{
    width:190px;
    border-bottom:1px solid #5F6270 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:auto;
    margin-right:auto;
}
.card-bg
{
    background: white;
    border-radius: 6px;
    position: relative;
    margin-right: 20px;
}
.card-part
{
    padding: 13px;
}
.card-part p
{
    margin-bottom:10px;
}
.middle
{
    text-align: left;
    color:black;
    opacity:0.7;
    font-size: 12px;
    line-height: 100%;
    
}
.title
{
    position:relative;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    color: black;
}
.general
{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color:black;
    text-align: left;
    opacity:1;
}
.dollar_price
{
    right: 0;
    position: absolute;
}
.btn-footer
{
  border:none;
  width:70px;
  height:70px;
  opacity:0.8;
  color:white;
  background-color:#222435;
}
.active, .btn-footer:hover
{
    color:black;
    opacity:1;
    background-color:#81DF0D;

}

.btn-footer:focus
{
    color:black;
    opacity:1;
    background-color:#81DF0D;

}
.footer-btn-text
{
    font-size:14px;
    text-align:center;
    opacity:0.8; 
}
.btn-setting
{
    padding-left:0 !important;
    padding-right:0 !important;
}
@media (max-width:768px)
{
    .border-bottom
{
    width:190px;
    border-bottom:1px solid #5F6270 !important;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left:auto;
    margin-right:auto;
}
.card-bg
{
    background: white;
    border-radius: 6px;
    position: relative;
    margin-right: 0px !important;
}
.card-part
{
    padding: 13px;
}
.card-part p
{
    margin-bottom:10px;
}
.middle
{
    text-align: left;
    color:black;
    opacity:0.7;
    font-size: 12px;
    line-height: 100%;
    
}
.title
{
    position:relative;
    font-weight: 700;
    font-size: 15px;
    line-height: 100%;
    color: black;
}
.general
{
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color:black;
    text-align: left;
    opacity:1;
}
.dollar_price
{
    right: 0;
    position: absolute;
}
.btn-footer
{
  border:none;
  width:70px;
  height:70px;
  opacity:0.8;
  color:white;
  background-color:#222435;
}
.active, .btn-footer:hover
{
    color:black;
    opacity:1;
    background-color:#81DF0D;

}

.btn-footer:focus
{
    color:black;
    opacity:1;
    background-color:#81DF0D;

}
.footer-btn-text
{
    font-size:14px;
    text-align:center;
    opacity:0.8; 
}
.btn-setting
{
    padding-left:0 !important;
    padding-right:0 !important;
}
}
`