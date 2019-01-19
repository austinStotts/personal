const title = (props) => {
  return (
    <div>
      <h1>{props.text}</h1>
      <style jsx>{`
        h1 {
          font-size: 30px;
          color: black;
          font-family: 'arial';
        }
      `}</style>
    </div>
  )
}

export default title;