import PropsComponent from './PropsComponent'

const ParentComponent = () => {
    return (
        <>
            <PropsComponent nama='falarkaan' umur={30} sudahMenikah='sudah' />
            <PropsComponent nama='budii' umur={40} sudahMenikah='belum' />
        </>
    )
}

export default ParentComponent