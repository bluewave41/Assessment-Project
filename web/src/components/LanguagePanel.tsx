import React from 'react';

const LanguagePanel = (props: any) => {
  return props.languages.map((language: string) => (
    <button key={language} onClick={() => props.onFilter(language)}>
      {language}
    </button>
  ));
};

export default LanguagePanel;
