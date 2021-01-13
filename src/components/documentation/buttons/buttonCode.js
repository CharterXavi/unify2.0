export const buttonCode = `
//PRIMARY BUTTON
    import './button-primary.css'
    import "aos/dist/aos.css"
    import React, {useEffect} from 'react'
    import AOS from "aos"
    
    const ButtonPrimary = (props) => {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        });
    
        return (
            <a 
                href={props.link}
                className='ButtonPrimary button-text'
                download={props.download === true} 
                data-aos={props.animation} 
                data-aos-duration={props.animationTime}
            >
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        );
    };
    
    export default ButtonPrimary

    //CSS module - button-primary.css
      .ButtonPrimary {
        outline: none;
        border: none;
        color: white;
        /* Rose */
        background: var(--primary-accent);
        box-shadow: var(--button-shadow);
        border-radius: 30px;
        min-width: 150px;
        width: auto;
        box-sizing: border-box;
        padding: 8px 16px 8px 16px;
        margin: 8px 0 8px 0;
        height: 45px;
        transition: 0.25s ease all;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito', sans-serif;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    .ButtonPrimary:hover {
        box-shadow: none;
        transform: translateY(2px);
        transition: 0.3s ease all;
        cursor: pointer;
        color: white;
    }
    .ButtonPrimary::before {
        content: '';
        width: 100%;
        height: 100%;
        background: var(--super-gradient);
        position: absolute;
        top: 0;
        left: 0;
        z-index: -2;
        transition: 0.4s ease all;
        opacity: 0;
        cursor: pointer;
    }
    .ButtonPrimary:hover::before {
        opacity: 1;
    }
    .ButtonPrimary img {
        width: 30px;
        height: auto;
        margin: 0 4px 0 0;
    }

//ALTERNATIVE PRIMARY BUTTON
    import './button-primary-alt.css'
    import "aos/dist/aos.css"
    import React, {useEffect} from 'react'
    import AOS from "aos"

    const ButtonPrimaryAlt = (props) => {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        });

        return (
            <a 
            href={props.link}
            className='ButtonPrimaryAlt button-text'
            download={props.download === true} 
            data-aos={props.animation} 
            data-aos-duration={props.animationTime}
            >
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        );
    };

    export default ButtonPrimaryAlt

    //CSS module - button-primary-alt.css
      .ButtonPrimaryAlt {
        outline: none;
        color: var(--primary-accent);
        box-shadow: var(--button-shadow);
        background: white;
        /* Brink Pink */    
        border-radius: 30px;
        min-width: 150px;
        width: auto;
        box-sizing: border-box;
        padding: 8px 16px 8px 16px;
        margin: 8px 0 8px 0;
        height: 45px;
        transition: 0.4s ease all;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito', sans-serif;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    .ButtonPrimaryAlt::before {
        content: '';
        width: 110%;
        height: 100%;
        background: var(--light-clinic-blue);
        position: absolute;
        top: 0;
        left: -110%;
        z-index: -2;
        transition: 0.3s ease all;
        cursor: pointer;
    }
    .ButtonPrimaryAlt:hover::before {
        left: -5%;
    }
    .ButtonPrimaryAlt:hover {
        box-shadow: none;
        transform: translateY(2px);
        transition: 0.3s ease all;
        cursor: pointer;
    }
    .ButtonPrimaryAlt img {
        width: 30px;
        height: auto;
        margin: 0 4px 0 0;
    }

//SECONDARY BUTTON
    import './button-secondary.css'
    import "aos/dist/aos.css"
    import React, {useEffect} from 'react'
    import AOS from "aos"

    const ButtonSecondary = (props) => {
        useEffect(() => {
            AOS.init();
            AOS.refresh();
        }); 
    
        return (
            <a 
            href={props.link}
            className='ButtonSecondary button-text'
            download={props.download === true} 
            data-aos={props.animation} 
            data-aos-duration={props.animationTime}
            >
                {/* if an icon prop is passed, display it */}
                {props.icon && <img src={props.icon} alt='Button Icon' width='30' height='30'/>}
                {/* display the content passed as a prop i.e. - what goes inside the button? */}
                {props.content}
            </a>
        );
    };

    export default ButtonSecondary


    //CSS module - button-secondary.css
      .ButtonSecondary {
        outline: none;
        color: var(--maximum-blue);
        box-shadow: var(--button-shadow);
        background: white;
        /* Brink Pink */    
        border-radius: 30px;
        min-width: 150px;
        width: auto;
        box-sizing: border-box;
        padding: 8px 16px 8px 16px;
        margin: 8px 0 8px 0;
        height: 45px;
        transition: 0.4s ease all;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Nunito', sans-serif;
        position: relative;
        overflow: hidden;
        z-index: 1;
    }
    .ButtonSecondary::before {
        content: '';
        width: 110%;
        height: 100%;
        background: var(--light-clinic-blue);
        position: absolute;
        top: 0;
        left: -110%;
        z-index: -2;
        transition: 0.3s ease all;
        cursor: pointer;
    }
    .ButtonSecondary:hover::before {
        left: -5%;
    }
    .ButtonSecondary:hover {
        box-shadow: none;
        transform: translateY(2px);
        transition: 0.3s ease all;
        cursor: pointer;
    }
    .ButtonSecondary img {
        width: 30px;
        height: auto;
        margin: 0 4px 0 0;
    }
  `.trim();