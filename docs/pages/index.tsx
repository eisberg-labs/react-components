import {Button, Container, Grid, styled} from '@mui/material';
import Typography from '@mui/material/Typography';
import GithubIcon from '@mui/icons-material/GitHub';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Head from 'next/head';
import {readProjectDirs} from '../src/server-util';

const GradientText = styled('span')<{
  start: string, end: string;
}>(({start, end}) => ({
  background: `linear-gradient(to bottom, ${start}, ${end})`,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent'
}));

export default function Index({projects, title, description}) {

  return (
    <>
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content={description}
      />
    </Head>
    <Grid container>
      <Grid item xs={12} md={12}>
        <div className={"wrapper"}>
          <div className="page-header section-dark" style={{
            borderBottomLeftRadius: '90% 80px',
            borderBottomRightRadius: '90% 80px',
            minHeight: '70vh',
            backgroundImage: "url('https://www.eisberg-labs.com/assets/img/iceberg-1.jpg')"
          }}>
            <div className="filter"></div>
            <div className="content-center">
              <div className="title-brand">
                <div className="angular-logo d-block d-sm-none">
                  <img src="https://www.eisberg-labs.com/assets/img/android-chrome-150x150.png" alt="Eisberg Labs"/>
                </div>
                <Typography variant={"h4"} component={"h1"} color={"primary"}>Eisberg Labs<br/><GradientText
                  start={process.env.NEXT_PUBLIC_PRIMARY} end={'#38AAE6'}>React Components</GradientText></Typography>
                <Button component={"a"}
                        href={"https://github.com/eisberg-labs/react-components"}
                        variant={"outlined"} color={"primary"}><GithubIcon color={"primary"}/>&nbsp;Github
                  Repository</Button>
              </div>
            </div>
          </div>
        </div>
      </Grid>
      <Grid item xs={12} md={12}>
        <Box sx={{mt: 3}}>
          <Container maxWidth={"xl"}>
            <Typography variant={"h5"} sx={{my: 3}} textAlign={"center"} component={"h2"}>Demo and
              documentation</Typography>
            <Stack spacing={3} direction={"row"} sx={{ flexWrap: 'wrap', gap: 1 }}>{
              projects.map(dirname => <Button key={dirname} component="a" href={`${process.env.NEXT_PUBLIC_BASE}/${dirname}`}
                                              variant={"outlined"}>{dirname}</Button>)
            }</Stack></Container>
        </Box>
      </Grid>
    </Grid>
    </>

  )
}

export function getStaticProps() {
  const title = 'Eisberg Labs React Components';
  const description = `An open-source collection of react components that we use in our projects. Check out demos, documentation and github repository.`;
  const projects = readProjectDirs();

  return {
    props: {
      projects,
      title,
      description
    }
  }


}
