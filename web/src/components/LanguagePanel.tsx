import React from 'react';
import Button from '@mui/material/Button';

const LanguagePanel = (props: any) => {
  return props.languages.map((language: string) => (
    <Button key={language} onClick={() => props.onFilter(language)}>
      {language}
    </Button>
  ));
};

export default LanguagePanel;
