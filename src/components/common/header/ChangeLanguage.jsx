import React, {forwardRef, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ToggleButton, ToggleButtonGroup} from "@mui/material";

import '../../../utils/i18next';


const ChangeLanguage = forwardRef(() => {
    const [lang, setLang] = useState(localStorage.getItem('i18nextLng'));

    const {t, i18n} = useTranslation();
    const changeLanguage = async (l) => {
        const value = l.target.value;
        setLang(value);
        await i18n.changeLanguage(value);
    }

    return (
        <div>
            <ToggleButtonGroup
                value={lang}
                exclusive
                onChange={changeLanguage}
            >
                <ToggleButton value={'ru'} aria-label="left aligned">
                    RU
                </ToggleButton>
                <ToggleButton value={'en'} aria-label="right aligned">
                    EN
                </ToggleButton>
            </ToggleButtonGroup>
        </div>
    );
});

export default ChangeLanguage;