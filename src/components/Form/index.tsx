/** @jsxImportSource @emotion/react */
import { ChangeEvent, useState } from 'react'
// import { useMediaQuery } from 'react-responsive'
import colors from '../../utils/colors'
import Button from '../Button'
import Input from '../Input'
import Textarea from '../Textarea/index'

const Form = () => {
  const [formState, setFormState] = useState({
    email: '',
    firstName: '',
    lastName: '',
    projectWebsite: '',
    tellUs: '',
  })

  // const isDesktop = useMediaQuery({
  //   query: '(min-device-width: 768px)',
  // })

  const handleSubmit = () => {
    alert(JSON.stringify(formState))
  }

  return (
    <section css={{ margin: '20px auto', padding: '24px', maxWidth: '72rem' }}>
      <div css={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h2
          css={{ textAlign: 'center', fontSize: '40px', marginBottom: '16px' }}
        >{`${"We're here to help"}`}</h2>
        <p css={{ textAlign: 'center', fontSize: '18px', color: colors.disabled, maxWidth: '617px' }}>
          Sequence helps you build the next generation of Internet economies and experiences.{' '}
          <a
            css={{ 'color': colors.white, ':visited': { color: colors.white } }}
            href="https://chat.sequence.build"
            target="_blank"
            rel="noreferrer"
          >
            Join our Discord
          </a>{' '}
          to chat with our team.
          <br />
          For additional support, reach out below.
        </p>
      </div>
      <form>
        <Input
          label="Your Email"
          name="email"
          type="email"
          value={formState.email}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setFormState({ ...formState, email: e.target.value })
          }
        />
        <div
          css={{
            'display': 'grid',
            'gridGap': '10px',
            'grid-template-columns': 'repeat(auto-fit, minmax(240px, 1fr))',
          }}
        >
          <Input
            label="First name"
            name="firstName"
            type="text"
            value={formState.firstName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setFormState({ ...formState, firstName: e.target.value })
            }
          />
          <Input
            label="Last name"
            name="lastName"
            type="text"
            value={formState.lastName}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setFormState({ ...formState, lastName: e.target.value })
            }
          />
        </div>
        <Input
          label="Project Website"
          name="projectWebsite"
          type="text"
          value={formState.projectWebsite}
          onChange={(e: ChangeEvent<HTMLInputElement>): void =>
            setFormState({ ...formState, projectWebsite: e.target.value })
          }
        />
        <Textarea
          label="Tell us about your project"
          name="tellUs"
          value={formState.tellUs}
          placeholder="Tell me about you"
          onChange={(e: ChangeEvent<HTMLTextAreaElement>): void =>
            setFormState({ ...formState, tellUs: e.target.value })
          }
        />
        <div css={{ textAlign: 'center' }}>
          <Button type="secondary" text="Submit" onClick={handleSubmit} />
        </div>
      </form>
    </section>
  )
}

export default Form
