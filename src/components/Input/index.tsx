/** @jsxImportSource @emotion/react */

interface inputProps {
  label: string
  name: string
  value: string
  onChange: () => void
}

const Input = ({ label, name, value, onChange }: inputProps) => (
  <div css={{ display: 'flex', flexDirection: 'column' }}>
    <label htmlFor={name}>{label}</label>
    <input
      css={{
        border: '2px solid #2a2a2a',
        backgroundColor: 'transparent',
        borderRadius: '15px',
        minHeight: '60px',
        outline: 'none',
        padding: '0 20px',
        fontSize: '20px',
        color: '#fff',
      }}
      name={name}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default Input
