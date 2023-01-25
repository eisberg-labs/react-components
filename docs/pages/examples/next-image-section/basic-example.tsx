import ImageSection from '@eisberg-labs/next-image-section';
import '@eisberg-labs/next-image-section/style.css';
import styles from './basic-example.module.css'

export default function BasicExample() {
  return (
    <>
  <ImageSection
    src={"https://cdn.pixabay.com/photo/2017/09/14/12/00/milna-2748776_960_720.jpg"}
    alt={"Pixabay Milna Croatia photo and picture by k9arteu"}
    rootClassName={styles.root}
    childClassName={"container"}
  >
    <p className={styles.content}>You can see in this example that img tag can work as a background.</p>
  </ImageSection></>);
}
