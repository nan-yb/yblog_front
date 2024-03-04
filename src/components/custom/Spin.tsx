
interface Props {
  spinning: boolean,
  children: JSX.Element | JSX.Element[];
}

const Spin = ({ spinning, children }: Props) => {

  return (
    spinning ?
      <div className="w-screen flex justify-center">
        <span className="loading loading-dots loading-lg"></span> 
      </div>
      :
      <>
        {children}
      </>

  )
}

export default Spin;