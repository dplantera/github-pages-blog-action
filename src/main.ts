import { getInput, info } from '@actions/core';
import { run } from './runner';
import path from 'path';
import * as github from '@actions/github';

const { pusher, repository } = github.context.payload;

const token = getInput('token') || process.env.GITHUB_TOKEN || '';
const branch = getInput('branch') || 'gh-pages';
const hostname = 'github.com';
const repositoryNameFull = repository?.full_name || process.env.GITHUB_REPOSITORY || '';
const repoPath = process.env.GITHUB_WORKSPACE || path.join(__dirname, '../');
const outputDir = path.join(repoPath, 'output');

// in GitHub we need to prefix all refs with the repo name without the owner
const repoName = path.basename(repositoryNameFull);
// this dir is in the repository of the action not the root of the project which will run the action
const themeDir = path.join(__dirname, '../theme');

run({
  token,
  pusherName: pusher?.name || process.env.GITHUB_PUSHER_NAME,
  pusherEmail: pusher?.email || process.env.GITHUB_PUSHER_EMAIL,
  repositoryName: repositoryNameFull,
  hostname,
  repoPath: repoPath,
  repoName,
  repoUrl: `https://x-access-token:${token}@${hostname}/${repositoryNameFull}.git`,
  outputDir: outputDir,
  branch,
  themeDir
}).then(() => info('done running action'));
