import { styled } from '../../../stitches.config'

export const TextContent = styled('section', {
  color: '$white',
  marginTop: '2rem',

  h1: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '1rem',
  },

  h2: {
    fontSize: '$medium',
    fontWeight: 600,
    margin: '1.5rem 0 .5rem'
  },

  button: {
    padding: '.5rem 1rem',
    backgroundColor: '$white',
    border: 'none',
    fontWeight: 600,
    color: '$blue500',
    marginBottom: '2rem',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '.5rem',
  },

  p: {
    lineHeight: 1.3,
    marginBottom: '1rem',
  },
})
