export default function NpmDownloads({name}) {
  return (
    <a href={`https://npmjs.org/package/${name}`}><img src={`https://img.shields.io/npm/dm/${name}`} alt="Downloads"/></a>
  )
}
