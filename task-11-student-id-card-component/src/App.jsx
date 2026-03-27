const students = [
  {
    id: 1,
    name: 'Aarav Sharma',
    course: 'BCA',
    year: '2nd Year',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    name: 'Meera Nair',
    course: 'BSc Data Science',
    year: '1st Year',
    image: 'https://randomuser.me/api/portraits/women/45.jpg'
  },
  {
    id: 3,
    name: 'Rohan Patel',
    course: 'BTech AI',
    year: '3rd Year',
    image: 'https://randomuser.me/api/portraits/men/50.jpg'
  }
]

function App() {
  const containerStyle = {
    maxWidth: '980px',
    margin: '0 auto',
    padding: '24px',
    fontFamily: 'Arial, sans-serif'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px'
  }

  const cardStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #d1d5db',
    borderRadius: '10px',
    padding: '16px',
    textAlign: 'center',
    boxShadow: '0 4px 10px rgba(0,0,0,0.08)'
  }

  const imageStyle = {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '10px'
  }

  return (
    <main style={containerStyle}>
      <h1 style={{ textAlign: 'center' }}>Student ID Card Component</h1>

      <section style={gridStyle}>
        {students.map((student) => (
          <article key={student.id} style={cardStyle}>
            <img src={student.image} alt={student.name} style={imageStyle} />
            <h2 style={{ margin: '8px 0' }}>{student.name}</h2>
            <p style={{ margin: '4px 0' }}>Course: {student.course}</p>
            <p style={{ margin: '4px 0' }}>Year: {student.year}</p>
          </article>
        ))}
      </section>
    </main>
  )
}

export default App
