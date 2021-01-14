import './chatbot.css';

import ChatBot from 'react-simple-chatbot';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Chatbot = () => {

    const theme = {
        background: 'white',
        headerBgColor: '#F22C57',
        headerFontColor: '#fff',
        headerFontSize: '24px',
        botBubbleColor: '#546182',
        botFontColor: '#fff',
        userBubbleColor: 'white',
        userFontColor: '#363f55',
    }
    const steps = [
        {
            id: '1',
            message: 'Welcome to UNIFY, the Charter Healthcare Group design system! 👋🏼',
            trigger: '2',
        },
        {
            id: '2',
            message: "I'm the CharterBot and I'm here to assist you today. ✌🏼 To start, what's your name?",
            trigger: '3',
        },
        {
            id: '3',
            user: true,
            trigger: '4',
        },
        {
            id: '4',
            message: 'Hi {previousValue}, nice to meet you!',
            trigger: '5',
        },
        {
            id: '5',
            message: 'What are you looking for in UNIFY?',
            trigger: '5a'
        },
        {
            id: '5a',
            options: [
              { value: 'use the design system', label: 'How to use the design system', trigger: '6' },
              { value: 'see the components', label: 'See the design system components', trigger: '7' },
            ],
        },
        {
            id: '6',
            message: 'Okay - got it. Learning how to use the design system is an important first step! Which page would you like to start with?',
            trigger: '6a'
        },
        {
            id: '6a',
            options: [
                { value: 'Guidelines', label: 'Guidelines', trigger: '6b' },
                { value: 'Purpose & Vision', label: 'Purpose & Vision', trigger: '6c' },
            ],
        },
        {
            id: '6b',
            message: 'Awesome, feel free to find that page in our menu (top corner of the page) and head on over - or simply click this link: ',
            trigger: '6ba'
        },
        {
            id: '6ba',
            component: (
                <a href='/guidelines'>Guidelines Page</a>
            ),
            trigger: '6bb'
        },
        {
            id: '6c',
            message: 'Awesome, feel free to find that page in our menu (top corner of the page) and head on over - or simply click this link: ',
            trigger: '6ca'
        },
        {
            id: '6ca',
            component: (
                <a href='/purpose'>Purpose & Vision Page</a>
            ),
            trigger: '6bb'
        },
        {
            id: '6bb',
            message: 'Anything else we can help you with?',
            trigger: '6bc'
        },
        {
            id: '6bc',
            options: [
                { value: 'Yes', label: 'Yes', trigger: '5' },
                { value: 'No', label: 'No', trigger: '8' },
            ]
        },
        {
            id: '7',
            message: 'Okay - got it. Here are the different components of the design system, click on any of them to head to the documentation!',
            trigger: '7a'
        },
        {
            id: '7a',
            component: (
                <div>
                    <a href="/colors">Colors</a>
                </div>
            ),
            trigger: '7b'
        },
        {
            id: '7b',
            component: (
                <div>
                    <a href="/typography">Typography</a>
                </div>
            ),
            trigger: '7c'
        },
        {
            id: '7c',
            component: (
                <div>
                    <a href="/spacing">Spacing</a>
                </div>
            ),
            trigger: '7d'
        },
        {
            id: '7d',
            component: (
                <div>
                    <a href="/buttons">Buttons</a>
                </div>
            ),
            trigger: '7e'
        },
        {
            id: '7e',
            component: (
                <div>
                    <a href="/iconography">Iconography</a>
                </div>
            ),
            trigger: '7f'
        },
        {
            id: '7f',
            component: (
                <div>
                    <a href="/forms">Forms</a>
                </div>
            ),
            trigger: '7g'
        },
        {
            id: '7g',
            component: (
                <div>
                    <a href="/logos">Logo</a>
                </div>
            ),
            trigger: '6bb'
        },
        {
            id: '8',
            message: 'Great, glad I could assist you today. Refresh the page if you want to start over from here. Until then, thanks for stopping by and have a great day!',
            end: true
        },
    ]
    const buttonStyles = {
        background: 'linear-gradient(66.41deg, #F14D70 14.26%, #FF008A 34.32%, #FF446C 53.87%, #FFB016 87.46%)',
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.4)',
        width: '60px',
        height: '60px'
    }
    const inputStyles = {
        background: 'white',
        color: '#363f55',
        margin: '0 0'
    }

    // const [isHovered, setIsHovered] = useState(false);
    // const handleHover = () => {
    //     setIsHovered(true);
    // }

    return (
        <div className="Chatbot">
            <ThemeProvider theme={theme}>
                <ChatBot 
                    steps={steps}
                    headerTitle="CharterBot"
                    floating='true'
                    floatingStyle={buttonStyles}
                    inputStyle={inputStyles}
                    placeholder='Type your message here...'
                />
            </ThemeProvider>
        </div>
    );
}

export default Chatbot;