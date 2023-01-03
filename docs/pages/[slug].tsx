import {readFileFrom, readProjectDirs} from '../src/server-util';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import {useEffect} from 'react';
import Header from 'header';
import Head from 'next/head';
import {Container} from '@mui/material';
import ReactMarkdown from 'react-markdown'

export default function Page({projects, readme, changelog, title, description, examples, slug}){
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
      <ReactMarkdown>{readme}</ReactMarkdown>
      {
        (examples.length) ? <h2>Examples</h2> : <></>
      }
      {
        examples.map(example => <iframe key={example} src={`/projects/react-components/examples/${slug}/${example}`}/>)
      }
      <ReactMarkdown>{changelog}</ReactMarkdown>
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
  const examples = {
    'use-google-charts': ['basic']
  };
  return {
    props: {
      slug,
      title, description,
      readme,
      changelog,
      projects,
      examples: examples[slug] || []
    }
  }
}
