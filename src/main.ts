import { getInput, info, } from "@actions/core";
import { run } from './runner';
import path from 'path';
import * as github from '@actions/github';

const { pusher, repository } = github.context.payload;

const token = getInput('token') || process.env.GITHUB_TOKEN || '';
const branch = getInput('branch') || 'gh-pages';
const hostname = 'github.com';
const repositoryName = repository?.full_name || process.env.GITHUB_REPOSITORY || '';
const repoPath = process.env.GITHUB_WORKSPACE || path.join(__dirname, '../');
const outputDir = path.join(repoPath, 'output');

// this dir is in the repository of the action not the root of the project which will run the action
info(`GITHUB_ACTION_PATH: ${process.env.GITHUB_ACTION_PATH}`)
const themeDir = path.join(process.env.GITHUB_ACTION_PATH || __dirname, '../theme')

  run({
  token,
  pusherName: pusher?.name || process.env.GITHUB_PUSHER_NAME,
  pusherEmail: pusher?.email || process.env.GITHUB_PUSHER_EMAIL,
  repositoryName,
  hostname,
  repoPath: repoPath,
  repoUrl: `https://x-access-token:${token}@${hostname}/${repositoryName}.git`,
  outputDir: outputDir,
  branch,
  themeDir
}).then(() => info("done running"));
