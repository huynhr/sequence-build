/** @jsxImportSource @emotion/react */

import colors from '../../utils/colors'
import Input from '../Input'

const Form = () => (
  <section css={{ margin: '20px auto', padding: '24px', maxWidth: '72rem' }}>
    <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h2
        css={{ textAlign: 'center', fontSize: '40px', marginBottom: '16px' }}
      >{`${"We're here to help"}`}</h2>
      <p css={{ textAlign: 'center', fontSize: '18px', color: colors.disabled, maxWidth: '617px' }}>
        Sequence helps you build the next generation of Internet economies and experiences.{' '}
        <a href="https://chat.sequence.build" target="_blank" rel="noreferrer">
          Join our Discord
        </a>{' '}
        to chat with our team.
        <br />
        For additional support, reach out below.
      </p>
    </div>
    <form>
      <Input label="Your Email" name="email" value="" onChange={() => {}} />
    </form>
  </section>
)

export default Form
