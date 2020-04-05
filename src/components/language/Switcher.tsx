import { i18n } from '../../libs/i18n';
import { useState } from 'react';
import ToolTip from '../base/Tooltip';

const LanguageSwitcher = () => {
  const [language, setLanguage] = useState(i18n.language);

  const clickHandle = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
  };

  return (
    <div
      className="absolute cursor-pointer right-0 mr-2 mt-2"
      style={{ width: 25, height: 25 }}
    >
      <ToolTip text={language === 'zh' ? 'English' : 'Chinese'}>
        {language === 'zh' ? (
          <img
            src="/static/svgs/uk.svg"
            onClick={() => clickHandle('en')}
            alt="En"
          />
        ) : (
          <img
            src="/static/svgs/china.svg"
            onClick={() => clickHandle('zh')}
            alt="Zh"
          />
        )}
      </ToolTip>
    </div>
  );
};

export default LanguageSwitcher;
