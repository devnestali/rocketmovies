import { Container }  from './styles';

// eslint-disable-next-line react/prop-types
export function Button ({ title, loading = false, deleteButton, ...rest}) {
  return (
    <Container deleteButton={deleteButton}
      type='button'
      disabled={loading}
      {...rest}
    >
     {loading ? 'Carregando...' : title}
    </Container>
  )
}
