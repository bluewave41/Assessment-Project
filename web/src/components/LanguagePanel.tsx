import React from 'react';
import Button from '@mui/material/Button';

/**
 * Draws a list of all the languages used by the repos.
 * @param props
 */
const LanguagePanel = (props: any) => {
  return props.languages.map((language: string) => (
    <Button key={language} onClick={() => props.onFilter(language)}>
      {language}
    </Button>
  ));
};

export default LanguagePanel;
