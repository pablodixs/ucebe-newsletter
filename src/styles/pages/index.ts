import { styled } from '../../../stitches.config'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: '660px',
  width: '100%',
  padding: '2.625rem',
  backgroundColor: '$white',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  h1: {
    margin: '3rem 0',
    fontSize: '$large',
    fontWeight: 600,
  },

  footer: {
    marginTop: '1rem',
    display: 'flex',
    gap: '1rem',

    a: {
      color: '$gray500',
      fontSize: '$small',
      textDecoration: 'none',

      '&:hover': {
        color: '$blue500',
        textDecoration: 'underline',
      },
    },
  },
})

export const Form = styled('form', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '100%',
  marginBottom: '1rem',

  label: {
    color: '$gray400',
    fontSize: '$small',
    fontWeight: 500,
    marginBottom: '.5rem',
  },

  input: {
    padding: '1rem',
    background: 'transparent',
    border: '2px solid $gray300',
    fontWeight: 500,

    '&:focus': {
      outlineColor: '$blue500',
      borderColor: '$blue500',
    },
  },

  '.check-area': {
    marginTop: '1.375rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',

    label: {
      fontSize: '$regular',
      color: '$black',
      fontWeight: 600,
      margin: 0,
      cursor: 'pointer',
    },
  },
})

export const Button = styled('button', {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  justifyContent: 'center',
  backgroundColor: '$blue500',
  padding: '1rem',
  border: 'none',
  maxWidth: '25rem',
  maxHeight: '3.25rem',
  width: '100%',
  margin: '0 auto',
  color: '$white',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'all ease 150ms',

  '&:hover': {
    backgroundColor: '#002e9c',
  },

  variants: {
    variant: {
      secondary: {
        backgroundColor: '$gray300',
        color: '$gray500',

        '&:hover': {
          backgroundColor: '$black',
          color: '$white',
        },
      },
    },
  },
})
