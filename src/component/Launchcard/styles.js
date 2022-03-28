import styled from 'styled-components';

export const Styles = styled.div`
    .launch-bg
    {
        padding: 3px;
        background: white;
        border-radius: 6px;
        position: relative;
        margin-right: 20px;
    }
    .launch-bg p
    {
        margin-bottom:7px !important;
    }
    .card-part
    {
        margin-left: 5px;
        position:absolute;
        padding: 15px 8px;
        top:0;
        width: 200px;
    }
    .dollar_price
    {
        right: 0;
        position: absolute;
    }
    .link-text
    {
        font-size: 14px;
        color:#ABACB5;
      
    }
    .border-bottom-fill
    {
        width:180px;
        border-bottom:1px solid #5F6270 !important;
        margin-top: 3px;
        margin-bottom: 3px;
        margin-left:auto;
        margin-right:auto;
    }
    .gold-text
    {
        margin-bottom:-1px;
        color:#F3B127;
        font-weight: 600;
        font-size: 12px;
        text-align:center;
    }
    .img-david
    {
        width:110px;
        height:auto;
    }
    .price
    {
        position:relative;
        font-weight: 700;
        font-size: 15px;
        line-height: 100%;
        color: #FFFFFF;
    }
    .timestamp
    {
        position:relative;
        font-size: 12px;
        line-height: 100%;
        color: #FFFFFF;
    }
    .btn-buy
    {
        position:absolute;
        left:0;
        bottom:0;
        color:#84E211;
        border:none;
    }
    .btn-buy:hover
    {
        border:none;
        color:#8BF30B;
    }
    .btn-sell
    {
        padding: 5px 10px 5px 15px !important;
        border:none;
        position:absolute;
        right:0;
        bottom:0;
        color:#E92C66;
    }
    .btn-sell:hover
    {
        border:none;
        color:#F20951;
    }
    .border-bottom
    {
        width:100px;
        border-bottom:1px solid #5F6270 !important;
        margin-top: 40px;
        margin-bottom: 41px;
        margin-left:auto;
        margin-right:auto;
    }
    @media (max-width:768px)
    {
        .launch-bg
        {
            height: 399px;
            padding: 3px;
            background: white;
            border-radius: 6px;
            position: relative;
            margin-right: 0px;
        }
        .launch-card
        {
            height: 390px;
        }
        .launch-bg p
        {
            margin-bottom:7px !important;
        }
        .card-part
        {
            margin-left: 5px;
            position:absolute;
            padding: 15px 8px;
            top:0;
            width: 290px;
        }
        .dollar_price
        {
            right: 0;
            position: absolute;
        }
        .link-text
        {
            font-size: 14px;
            color:#ABACB5;
          
        }
        .border-bottom-fill
        {
            width:280px;
            border-bottom:1px solid #5F6270 !important;
            margin-top: 3px;
            margin-bottom: 3px;
            margin-left:auto;
            margin-right:auto;
        }
        .gold-text
        {
            margin-bottom:-1px;
            color:#F3B127;
            font-weight: 600;
            font-size: 12px;
            text-align:center;
        }
        .price
        {
            position:relative;
            font-weight: 700;
            font-size: 15px;
            line-height: 100%;
            color: #FFFFFF;
        }
        .timestamp
        {
            position:relative;
            font-size: 12px;
            line-height: 100%;
            color: #FFFFFF;
        }
        .btn-buy
        {
            position:absolute;
            left:0;
            bottom:0;
            color:#84E211;
            border:none;
        }
        .btn-buy:hover
        {
            border:none;
            color:#8BF30B;
        }
        .btn-sell
        {
            padding: 5px 10px 5px 15px !important;
            border:none;
            position:absolute;
            right:0;
            bottom:0;
            color:#E92C66;
        }
        .btn-sell:hover
        {
            border:none;
            color:#F20951;
        }
        .border-bottom
        {
            width:100px;
            border-bottom:1px solid #5F6270 !important;
            margin-top: 40px;
            margin-bottom: 41px;
            margin-left:auto;
            margin-right:auto;
        }
        .img-david
        {
        width:180px !important;
        }
    }
`