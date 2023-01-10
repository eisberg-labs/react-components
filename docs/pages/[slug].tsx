import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import {useEffect} from 'react';
import Header from 'header';
import Head from 'next/head';
import {Container} from '@mui/material';
import ReactMarkdown from 'react-markdown'
import {projects} from '../src/projects';
import fs from 'fs';
import path from 'path';
import dynamic from 'next/dynamic';

const Examples = dynamic(() => import('demos'), {ssr: false});

export default function Page({projects, readme, changelog, title, description, slug}) {
  useEffect(() => {
    hljs.highlightAll();
  }, [])

  return (<>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
    <Header projects={projects}/>
    <Container maxWidth={"md"}>
      <ReactMarkdown>{readme}</ReactMarkdown>
      <Examples project={slug}/>
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </Container>


  </>)
}

export function getStaticPaths() {

  return {
    paths: projects.map(project => ({params: {slug: project.name.split("/")[1]}})),
    fallback: false
  }
}

export function getStaticProps({params}) {
  const {slug} = params;
  const pkg: any = projects.find(it => it.name.indexOf(slug) !== -1);
  const readFrom = (file)=>fs.readFileSync(path.join(__filename, '..', '..', '..', '..', '..', 'packages', slug, file), {encoding: 'utf-8'})
  const readme = readFrom('README.md').replace("/packages", '/projects/react-components/packages');
  const changelog = readFrom('CHANGELOG.md')
  const title = `${pkg.documentation.title} - Eisberg Labs`;
  const description = pkg.description;
  return {
    props: {
      slug,
      title, description,
      readme,
      changelog,
      projects: projects.map(it => it.name.split('/')[1])
    }
  }
}
