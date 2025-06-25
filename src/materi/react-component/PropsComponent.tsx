type Props = {
  nama?: string,
  umur: number,
  sudahMenikah: 'sudah' | 'belum'
}

const PropsComponent = ({ nama='anonim', umur, sudahMenikah }: Props) => {
  return (
    <div>
      <h1>Hello nama saya {nama}, umur saya adalah {umur} tahun, dan saya {sudahMenikah} menikah.</h1>
    </div>
  );
};

export default PropsComponent