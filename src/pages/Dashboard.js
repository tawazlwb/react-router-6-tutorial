export const Dashboard = ({ user }) => {
  return (
    <section className='section'>
      <h2>Hello, {user?.name}</h2>
      <h5>Hello, {user?.email}</h5>
    </section>
  )
}

export default Dashboard
