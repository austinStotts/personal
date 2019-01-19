import Layout from '../components/layout.js'
import Title from '../components/title';
import Anchor from '../components/Anchor';

const PostLink = (props) => (
  <li>
    <Anchor text={props.title} as={`/p/${props.id}`} link={`/post?title=${props.title}`}/>
  </li>
)

export default () => (
  <Layout>
    <Title text={'My Blog'}/>
    <ul>
      <PostLink id="hello-nextjs" title="Hello Next.js"/>
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome"/>
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit"/>
    </ul>
  </Layout>
)
