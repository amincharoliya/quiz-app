import { createGlobalStyle } from 'styled-components'
import theme from './utils/theme';

const GlobalStyle = createGlobalStyle`
    /*Reset CSS*/
    a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:'';content:none}table{border-collapse:collapse;border-spacing:0}
    /*Global Variables*/
    html.theme-light {
        --main-bg-color: ${theme.light['main-bg-color']};
        --secondary-bg-color: ${theme.light['secondary-bg-color']};
        --main-text-color: ${theme.light['main-text-color']};
    }
    
    html.theme-dark {
        --main-bg-color: ${theme.dark['main-bg-color']};
        --secondary-bg-color: ${theme.dark['secondary-bg-color']};
        --main-text-color: ${theme.dark['main-text-color']};
        background-color: var(--secondary-bg-color);
    }

    * {
        box-sizing: border-box;
    }
    body, button {
        font-size: 16px;
        font-family: 'Mulish', sans-serif;
        font-weight: 700;
    }
    .wrapper {
        max-width:1024px;
        margin: 0 auto;
        width: 100%;
        @media only screen and (max-width: 1024px) {
            max-width:90%;
        }

        a {
            color: #f53838;
        }

    }

    .content-part {
        background-color: var(--main-bg-color);
    }

    .button {
        color: #fff;
        background-color: #f53838;
        font-weight: 700;
        padding: 6px 20px 8px;
        min-width: 100px;
        border: 1px solid #f53838;
        border-radius: 25px;
        cursor: pointer;
        transition: all ease 0.3s;
        
        &:not(:first-child) {
            margin: 0 0 0 15px;
        }

        &:hover {
            box-shadow: inset 0 0 100px rgba(0,0,0,0.2);
        }

        &.signin-button {
            border:0;
            padding: 6px 0;
            min-width: auto;
            background-color: transparent;
            color: #f53838;
            box-shadow: none;
        }
    }
    .link {
        color: #f53838;
        cursor: pointer;
    }
    h1,h2,h3,p,ul{margin-bottom:25px;color:var(--main-text-color);}
    li{margin-bottom:10px;}
    p,ul{font-weight: normal;line-height: 1.4;}
    code {
        background-color: var(--main-bg-color);
        padding: 10px 15px;
        font-size: 13px;
        white-space: pre-wrap;
        font-family: monospace;
        letter-spacing: 0;
        display: block;
        width: 100%;
    }
`;
 
export default GlobalStyle;