import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';

interface RepositoryListProps {
  onRepoClick: any;
  repos: any;
}

/**
 * Displays a card grid list of each repository from the API response.
 * @param props
 */
const RepositoryList = (props: RepositoryListProps) => {
  return (
    <Grid
      container={true}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      {props.repos.map((repo: any) => (
        <Grid item={true} key={repo.name}>
          <Card
            sx={{
              minHeight: 170,
              minWidth: 275,
              margin: 3,
              backgroundColor: '#333',
              color: 'white',
            }}
          >
            <CardContent>
              <h3
                style={{ cursor: 'pointer' }}
                onClick={() => props.onRepoClick(repo.name)}
              >
                {repo.name}
              </h3>
              <div>{repo.description}</div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  margin: '10px',
                }}
              >
                <span>{repo.language}</span>
                <span>Forks: {repo.forks_count}</span>
              </div>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default RepositoryList;
