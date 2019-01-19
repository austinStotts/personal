import Link from 'next/link';

const click = (props) => (
  <div>
    <Link href={props.link}>
      <a>{props.text}</a>
    </Link>
      <style jsx>{`
        a {
          font-family: "arial";
          font-size: 17px;
        }
        a:hover {
          color: red;
        }
        div {
          display: inline-block;
          margin-right: 10px;
        }
      `}</style>
  </div>
)

export default click;