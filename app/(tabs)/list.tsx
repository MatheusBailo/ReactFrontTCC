/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import api from '@/services/api'
import { Menu } from '../../components/menu'

type Idoso = {
  id: number
  name: string
  bornAge: string
  image: string
  roomNumber: number
  caregiverName: string
  especialConditions: string
}

export default function List() {
  const [list, setList] = useState<Idoso[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get('/list')
        setList(response.data)
      } catch (error) {
        setError('Erro ao carregar listas')
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchList()
  }, [])

  if (loading) return <p style={{ textAlign: 'center' }}>Carregando listas...</p>
  if (error) return <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>

  return (
    <section
      style={{
        padding: 20,
        paddingBottom: 90, // espaço pro menu inferior
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
      }}
    >
      {/* Removido o "Perfil" do topo */}
      <Menu />

      <h2 style={{ fontSize: 24, marginBottom: 10, textAlign: 'center' }}>
        Lista de Idosos
      </h2>

      <div style={{ flex: 1, overflowY: 'auto', paddingRight: 8 }}>
        <ol style={{ padding: 0 }}>
          {list.map((item) => (
            <ul
              key={item.id}
              style={{
                border: '1px solid #ccc',
                padding: '16px',
                borderRadius: '10px',
                marginBottom: '12px',
                listStyle: 'none',
                backgroundColor: '#fff',
              }}
            >
              <img
                src={item.image}
                alt={`Foto de ${item.name}`}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: '50%',
                  objectFit: 'cover',
                  marginBottom: 10,
                }}
              />
              <p><strong>Nome:</strong> {item.name}</p>
              <p><strong>Idade:</strong> {item.bornAge}</p>
              <p><strong>Quarto:</strong> {item.roomNumber}</p>
              <p><strong>Cuidador:</strong> {item.caregiverName}</p>
              <p><strong>Condições Especiais:</strong> {item.especialConditions}</p>
              <div style={{ marginTop: 10 }}>
                <button
                  style={{
                    marginRight: 10,
                    padding: '6px 12px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  👤 {item.caregiverName}
                </button>
                <button
                  style={{
                    padding: '6px 12px',
                    borderRadius: 6,
                    border: 'none',
                    backgroundColor: '#28a745',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  Visualizar Rotina
                </button>
              </div>
            </ul>
          ))}
        </ol>
      </div>
    </section>
  )
}
