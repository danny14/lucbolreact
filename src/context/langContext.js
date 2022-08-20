import React, {useState} from "react";
import messageSpanish from './../lang/es-ES.json';
import messageEnglish from './../lang/en-US.json';
import {IntlProvider} from 'react-intl';


const langContext = React.createContext();

const LangProvider = ({children}) => {

    const [message, setMessage] = useState(messageEnglish);
    const [locale, setLocale] = useState('en-US');

    const setLanguage = (language) =>{
        switch(language){
            case 'es-ES':
                setMessage(messageSpanish);
                setLocale('es-ES');
                break;
            case 'en-US':
                setMessage(messageEnglish);
                setLocale('en-US');
                break;
            default:
                setMessage(messageEnglish);
                setLocale('en-US');
        }
    }

    return (
        <langContext.Provider value={{setLanguage: setLanguage}}>
            <IntlProvider locale={locale} messages={message}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
}

export {LangProvider, langContext}