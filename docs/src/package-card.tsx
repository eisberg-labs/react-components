import Card from "@mui/material/Card";
import {CardActions, CardContent, CardMedia} from '@mui/material';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import NpmDownloads from './npm-downloads';
import {useRouter} from 'next/router';
import Image from 'next/image';
import styles from './package-card.module.css';
import NpmPackageSize from './npm-package-size';

export default function PackageCard({pkg}: { pkg: { [key: string]: any } }) {
  const pkgname = pkg.name.split('/')[1];
  const router = useRouter();
  const targetPage = `${process.env.NEXT_PUBLIC_BASE}/${pkgname}`;
  const goToPage = () => router.push(targetPage)
  return (
    <Card className={styles.root} onClick={goToPage}>
      {
        !!pkg.documentation?.thumbnail && (
          <CardMedia>
            <div className={styles.cardmediaInner}>
              <Image src={`${process.env.NEXT_PUBLIC_BASE}/packages/${pkgname}/docs/${pkg.documentation?.thumbnail}`}
                     alt={pkg.documentation?.name ?? pkg.name}
                     fill className={"cover"}/>
            </div>
          </CardMedia>
        )
      }
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <Link href={targetPage}>{pkg.documentation?.title ?? pkg.name}</Link>
        </Typography>
        <Typography variant="body2"
                    color="text.secondary">{pkg.documentation?.description ?? pkg.description}</Typography>
      </CardContent>
      <CardActions>
        <NpmDownloads name={pkg.name}/>
        <NpmPackageSize name={pkg.name}/>
      </CardActions>
    </Card>
  )
}
