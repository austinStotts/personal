import Link from 'next/link';
import Anchor from './Anchor';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
  <div>
    <Anchor text={'home'} link={'/'}/>
    <Anchor text={'about'} link={'/about'}/>
  </div>
)

export default Header