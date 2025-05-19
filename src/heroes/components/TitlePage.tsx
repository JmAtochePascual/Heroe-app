
type TitlePageProps = {
  title: string;
}

export const TitlePage = ({ title }: TitlePageProps) => {
  return (
    <>
      <h1 className="mb-2 text-2xl font-black">{title}</h1>
      <hr className="mb-4 border border-gray-200" />
    </>
  )
}
