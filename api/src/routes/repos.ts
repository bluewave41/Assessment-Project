import { Router, Request, Response } from 'express';
import { promises as fs } from 'fs';
import axios from 'axios';

export const repos = Router();

repos.get('/', async (_: Request, res: Response) => {
  const diskData = JSON.parse((await fs.readFile('./data/repos.json')).toString());
  const apiData = (await axios.get('https://api.github.com/users/silverorange/repos')).data;
  const aggregatedData = [...diskData, ...apiData].filter(el => !el.fork);

  res.header('Cache-Control', 'no-store');

  res.status(200);

  // TODO: See README.md Task (A). Return repo data here. You’ve got this!
  res.json(aggregatedData);
});
