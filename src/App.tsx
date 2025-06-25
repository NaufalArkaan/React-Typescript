import './App.css'
import ChildrenProps from './materi/react-component/ChildrenProps'
// import ParentComponent from './materi/react-component/ParentComponent'
// import PropsComponent from './materi/react-component/PropsComponent'

function App() {
  return (
    <>
        {/* <PropsComponent umur={30} sudahMenikah='sudah' />
        <PropsComponent nama='budii' umur={40} sudahMenikah='belum' /> */}
        <ChildrenProps>
          Hello
        </ChildrenProps>
    </>
  )
};

export default App
