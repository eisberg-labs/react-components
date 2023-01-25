import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';
import {useEffect} from 'react';
import Header from 'header';
import Head from 'next/head';
import {Container} from '@mui/material';
import ReactMarkdown from 'react-markdown'
import {projects} from '../../src/projects';
import fs from 'fs';
import path from 'path';
import remarkGfm from 'remark-gfm';
import CodePreview from '../../src/code-preview';


interface Props {
  projects: string[],
  readme: string,
  changelog: string,
  title: string,
  description: string,
  slug: string,
  examples: { [key: string]: string }
}

export default function Page({
                               projects,
                               slug,
                               readme,
                               changelog,
                               title,
                               description,
                               examples
                             }: Props) {
  useEffect(() => {
    hljs.highlightAll();
  }, [])

  return (<>
    <Head>
      <title>{title}</title>
      <meta
        name='description'
        content={description}
      />
    </Head>
    <Header projects={projects}/>
    <Container maxWidth={'md'}>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{readme}</ReactMarkdown>
      <h2>Examples</h2>
      {
        Object.entries(examples).map(([exampleName, contents], idx) => {
          return (
            <>
              <h5>{exampleName}</h5>
              <CodePreview key={idx} code={contents} iframe={`${process.env.NEXT_PUBLIC_BASE}/examples/${slug}/${exampleName.replace('.tsx', '')}`}></CodePreview>
            </>
          );
        })
      }
      <ReactMarkdown>{changelog}</ReactMarkdown>
    </Container>
    <div style={{marginBottom: '100px'}}/>

  </>)
}

export function getStaticPaths() {

  return {
    paths: projects.map(project => ({params: {slug: project.name.split('/')[1]}})),
    fallback: false
  }
}

export function getStaticProps({params}) {
  const rootDir = path.join(__filename, '..', '..', '..', '..')
  const readFrom = (...args): string => fs.readFileSync(path.join(rootDir, '..', ...args), {encoding: 'utf-8'})
  const readDirs = (...args): string[] => {
    if (!fs.existsSync(path.join(rootDir, ...args))){
      return [];
    }
    return fs.readdirSync(path.join(rootDir, ...args));
  }
  const fixRelativePaths = (contents: string) => contents.replace('/packages', '/projects/react-components/packages')
  const {slug} = params;
  const pkg: any = projects.find(it => it.name.indexOf(slug) !== -1);
  const exampleFiles = readDirs('pages', 'examples', slug).filter(it => it.endsWith('tsx'));
  const readme = fixRelativePaths(readFrom('packages', slug, 'README.md'));
  const changelog = readFrom('packages', slug, 'CHANGELOG.md')
  const title = `${pkg.documentation.title} - Eisberg Labs`;
  const description = pkg.description;
  const examples = exampleFiles.reduce((acc, file) => {
    const contents = readFrom('docs', 'pages', 'examples', slug, file);
    acc[file] = contents;
    return acc;
  }, {});
  return {
    props: {
      title, description,
      readme,
      changelog,
      examples,
      slug,
      projects: projects.map(it => it.name.split('/')[1])
    }
  }
}
