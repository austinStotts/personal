import Header from './header'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '2px solid black',
  borderRadius: '5px'
}

const Layout = (props) => (
  <div style={layoutStyle}>
    <Header />
    {props.children}
  </div>
)

export default Layout