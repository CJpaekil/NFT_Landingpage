import styled from 'styled-components';

export const Styles = styled.div`
    .favourite-part
    {
        background-image: url('assets/images/background.jpg');
        width: 100%;
        background-size: cover;
        position: relative;
        background-size: cover;
        overflow-y: none;
        padding:50px 0px;
    }
    .launch-text
    {
        color:white;
        opacity:0.8;
        font-size:18px;
        text-align:center;
    }
    .latestNFT-part
    {
        background-color:#12131C;
        width: 100%;
        background-size: cover;
        position: relative;
        background-size: cover;
        overflow-y: none;
        padding: 50px 0px;
  
    }
    .a111
    {
        max-width: 720px;
        margin: auto;
        padding-left: 10px;
    }
    .signup
    {
        max-width:540px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:16px;
    }
    .signup .title
    {
        font-family: 'Rajdhani';
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        line-height: 44px;
        display: flex;
        align-items: center;
        text-align: center;
        color:white;
        opacity: 0.9;
        margin-bottom: 26px;
    }
    .signup .general
    {
        opacity: 0.4;
        max-width:300px;
        margin:auto;
        color:white;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 26px;
    }
    .general-elit
    {
        opacity: 0.4;
        max-width:600px;
        color:white;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        margin-top:45px;
        margin-bottom: 22px;
        margin-left: auto;
    }
    .viewall-text
    {
        color:#6BC909;
        text-align:center;
        font-size:14px;
        text-decoration:underline;
    }
    .btn-signup
    {
        width:135px;
        margin:auto;
        height:45px;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        /* identical to box height, or 16px */
        opacity: 0.8;
        display: flex;
        align-items: center;
        text-align: center;

        /* Primary/300 */

        color: #81DF0D;
        border:1px solid #81DF0D;
    }
    .btn-signup:hover
    {
        border:1px solid #74B721;
    }
    .slider
    {
        max-width: 720px;
        margin: auto;
        padding-left: 10px;
    }
    .faq
    {
        background-color:#222435;
        padding:60px 0px;
    }
    .faq-part
    {
        text-align:center;
        width:500px;
        margin:auto;
    }
    .faqs
    {
        margin-top:60px;
    }
    .main-aqs
    {
        margin:44px 0px;
    }
    .faq .title
    {
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        /* identical to box height, or 123% */
        color:white;
        opacity:0.8;

        text-align: center;
    }
    .faq .general
    {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */
        color:white;
        opacity:0.4;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .faq .middle
    {
        text-align: left;
        color:white;
        opacity:0.8;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        
    }

    .faq .bottomborder
    {
        border-bottom:1px solid #5F6270;
        position: relative;
        margin-bottom:10px;
    
    }
    .faq .leftborder
    {
        border-left:1px solid #5F6270;
        margin-bottom:10px;
    }
    .faq .symbol
    {
        font-size:22px;
        float:right;
        color:#6BC909;
        position:absolute;
        right:0;
    }
    .blog
    {
        background-color:#12131C;
        padding:60px 0px;
    }
    .blog p
    {
        margin-bottom:24px;
    }
    .blog input
    {
        margin-bottom:24px;
    }
    .blog-part
    {
        max-width:500px;
        margin:auto;
        background-color:#12131C;
    }
    .blog .border-bottom
    {
        width:200px;
        border-bottom:1px solid #5F6270 !important;
        margin-top: 40px;
        margin-bottom: 41px;
        margin-left:auto;
        margin-right:auto;
    }
    .blog .title
    {
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        /* identical to box height, or 123% */
        color:white;
        opacity:0.8;

        text-align: center;
    }
    .blog .general
    {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */
        color:white;
        opacity:0.4;

        align-items: center;
        text-align: center;
    }
    .blog .middle
    {
        text-align: center;
        color:white;
        opacity:0.8;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        
    }
    .email-address
    {
        width: 320px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 14px;
        text-align: center;
        margin-bottom: 1erm !important;
        display: flex;
        justify-content: center;
    }
    .email-part
    {
        margin-bottom: 16px;
    }
    .social
    {
        max-width: 212px;;
        margin:auto;
    }
    .social-icons
    {
        margin-right:10px;
        width:17px;
        color:#81DF0D;
        opacity:0.9;
        border:1px solid #81DF0D;
        border-radius:10px;
    }
    @media (max-width:768px)
    {
        .favourite-part
    {
        background-image: url('assets/images/background.jpg');
        width: 100%;
        background-size: cover;
        position: relative;
        background-size: cover;
        overflow-y: none;
        padding:50px 0px;
    }
    .launch-text
    {
        color:white;
        opacity:0.8;
        font-size:18px;
        text-align:center;
    }
    .latestNFT-part
    {
        background-color:#12131C;
        width: 100%;
        background-size: cover;
        position: relative;
        background-size: cover;
        overflow-y: none;
        padding: 50px 0px;
  
    }
    .a111
    {
        max-width: 340px;
        margin: auto;
   
    }
    .signup
    {
        max-width:300px;
        margin-left:auto;
        margin-right:auto;
        margin-bottom:16px;
    }
    .signup .title
    {
        font-family: 'Rajdhani';
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 44px;
        display: flex;
        align-items: center;
        text-align: center;
        color:white;
        opacity: 0.9;
        margin-bottom: 26px;
    }
    .signup .general
    {
        opacity: 0.4;
        max-width:300px;
        margin:auto;
        color:white;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */

        display: flex;
        align-items: center;
        text-align: center;
        margin-bottom: 26px;
    }
    .general-elit
    {
        opacity: 0.4;
        max-width:600px;
        color:white;
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        margin-top:45px;
        margin-bottom: 22px;
        margin-left: auto;
        text-align: center;
    }
    .viewall-text
    {
        color:#6BC909;
        text-align:center;
        font-size:14px;
        text-decoration:underline;
    }
    .btn-signup
    {
        width:135px;
        margin:auto;
        height:45px;
        font-weight: 700;
        font-size: 16px;
        line-height: 100%;
        /* identical to box height, or 16px */
        opacity: 0.8;
        display: flex;
        align-items: center;
        text-align: center;

        /* Primary/300 */

        color: #81DF0D;
        border:1px solid #81DF0D;
    }
    .btn-signup:hover
    {
        border:1px solid #74B721;
    }
    .slider
    {
        max-width: 320px;
        margin: auto;
        padding-left: 10px;
    }
    .faq
    {
        background-color:#222435;
        padding:60px 0px;
    }
    .faq-part
    {
        text-align:center;
        width:290px;
        margin:auto;
    }
    .faqs
    {
        margin-top:60px;
    }
    .main-aqs
    {
        margin:44px 0px;
    }
    .faq .title
    {
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        /* identical to box height, or 123% */
        color:white;
        opacity:0.8;

        text-align: center;
    }
    .faq .general
    {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */
        color:white;
        opacity:0.4;
        display: flex;
        align-items: center;
        text-align: center;
    }
    .faq .middle
    {
        text-align: left;
        color:white;
        opacity:0.8;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        
    }

    .faq .bottomborder
    {
        border-bottom:1px solid #5F6270;
        position: relative;
        margin-bottom:10px;
    
    }
    .faq .leftborder
    {
        border-left:1px solid #5F6270;
        margin-bottom:10px;
    }
    .faq .symbol
    {
        font-size:22px;
        float:right;
        color:#6BC909;
        position:absolute;
        right:0;
    }
    .blog
    {
        background-color:#12131C;
        padding:60px 0px;
    }
    .blog p
    {
        margin-bottom:24px;
    }
    .blog input
    {
        margin-bottom:24px;
    }
    .blog-part
    {
        max-width:290px;
        margin:auto;
        background-color:#12131C;
    }
    .blog .border-bottom
    {
        width:200px;
        border-bottom:1px solid #5F6270 !important;
        margin-top: 40px;
        margin-bottom: 41px;
        margin-left:auto;
        margin-right:auto;
    }
    .blog .title
    {
        font-weight: 600;
        font-size: 26px;
        line-height: 32px;
        /* identical to box height, or 123% */
        color:white;
        opacity:0.8;

        text-align: center;
    }
    .blog .general
    {
        font-weight: 400;
        font-size: 18px;
        line-height: 24px;
        /* or 133% */
        color:white;
        opacity:0.4;

        align-items: center;
        text-align: center;
    }
    .blog .middle
    {
        text-align: center;
        color:white;
        opacity:0.8;
        font-weight: 600;
        font-size: 16px;
        line-height: 100%;
        
    }
    .email-address
    {
        width: 270px;
        height: 40px;
        margin-left: auto;
        margin-right: auto;
        border-radius: 14px;
        text-align: center;
        margin-bottom: 1erm !important;
        display: flex;
        justify-content: center;
    }
    .email-part
    {
        margin-bottom: 16px;
    }
    .social
    {
        max-width: 212px;;
        margin:auto;
    }
    .social-icons
    {
        margin-right:10px;
        width:17px;
        color:#81DF0D;
        opacity:0.9;
        border:1px solid #81DF0D;
        border-radius:10px;
    }
    }
`