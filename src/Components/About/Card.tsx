interface cardProps {
  imgPath: string,
  desc?: string,
  title: string
}

const Card = ({ imgPath, desc, title }: cardProps) => {
  return (
    <>
      <p>{title}</p>
      <>
        <img alt="left" />
        <>
          <img ref={imgPath} alt="1" />
          <p>{desc}</p>
        </>
        <img alt="right" />
      </>
    </>
  )
}

export default Card;