import Link from 'next/link';
import Click from './click';

const linkStyle = {
  marginRight: 15
}

const Header = () => (
    <div>
        <Click text={'home'} link={'/'}/>
        <Click text={'about'} link={'/about'}/>
    </div>
)

export default Header