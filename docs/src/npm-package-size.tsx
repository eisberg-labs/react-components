export default function NpmPackageSize({name}) {
  return (
    <a href={`https://npmjs.org/package/${name}`}><img src={`https://img.shields.io/bundlephobia/min/${name}`} alt="Downloads"/></a>
  )
}
