import Link from 'next/link';

const anchor = (props) => (
  <div>
    <Link as={props.as} href={props.link}>
      <a>{props.text}</a>
    </Link>
      <style jsx>{`
        a {
          color: black;
          font-family: "arial";
          font-size: 17px;
          text-decoration: none;
          transition-duration: 0.4s;
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

export default anchor;