import Markdown from 'markdown-to-jsx';
import {readFileFrom, readProjectDirs} from '../src/server-util';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import {useEffect} from 'react';
import Header from 'header';
import Head from 'next/head';
import {Container} from '@mui/material';

export default function Page({projects, readme, changelog, title, description}){
  useEffect(()=>{
    hljs.highlightAll();
  }, [])
  return (<>
    <Head>
    <title>{title}</title>
    <meta
      name="description"
      content={description}
    /></Head>
    <Header projects={projects}/>
    <Container maxWidth={"md"}>
      <Markdown>{readme}</Markdown>
      <Markdown>{changelog}</Markdown>
    </Container>

  </>)
}

export function getStaticPaths() {
  console.log('Pulling data for project lists')
  const projects = readProjectDirs();
  console.log('Projects read', projects);

  return {
    paths: projects.map(project => ({params: {slug: project}})),
    fallback: false
  }
}

export function getStaticProps({params}){
  const {slug} = params;
  const pkg: any = JSON.parse(readFileFrom(slug, 'package.json'));
  const projects = readProjectDirs();
  const readme = readFileFrom(slug, 'README.md');
  const changelog = readFileFrom(slug, 'CHANGELOG.md')
  const title = `${pkg.name} - Eisberg Labs React Components`;
  const description = pkg.description;

  return {
    props: {
      title, description,
      readme,
      changelog,
      projects
    }
  }
}
