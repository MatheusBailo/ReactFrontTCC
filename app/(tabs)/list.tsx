/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'
import api from '@/services/api'
import { Menu } from '../../components/menu'

// Tipo dos dados da API
type Idoso = {
  id: string
  name: string
  bornAge: number
  roomNumber: string
}

export default function List() {
  const [list, setList] = useState<Idoso[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchList() {
      try {
        const response = await api.get<Idoso[]>('/List')
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
    <section style={{ padding: 20 }}>
      <Menu />
      <h2 style={{ fontSize: 24, marginBottom: 20, textAlign: 'center' }}>
        Lista de Idosos
      </h2>
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
              backgroundColor: '#f9f9f9',
            }}
          >
            <p><strong>Nome:</strong> {item.name}</p>
            <p><strong>Idade:</strong> {item.bornAge}</p>
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
                👤 Larissa Taxad
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
    </section>
  )
}
