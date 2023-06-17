import { styled } from '../../../stitches.config'

export const ContentContainer = styled('section', {
  maxWidth: '700px',
  width: '100%',
  margin: '0 auto',
})

export const FeatureContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  color: '$white',
  margin: '2rem',

  h2: {
    fontSize: '$regular',
    fontWeight: 500,
  },

  a: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    color: '$blue500',
    backgroundColor: '$white',
    padding: '.5rem 1rem',
    gap: '1rem',
    fontWeight: 600,
    marginTop: '0.875rem',
    transition: 'all 100ms ease-in-out',

    '&:hover': {
      backgroundColor: '#002e9c',
      color: '$white',
    },
  },
})

export const NewsContentContainer = styled('section', {
  h1: {
    color: '$white',
    fontSize: '$medium',
    fontWeight: 600,
  },
})

export const NewsArticleContainer = styled('div', {
  backgroundColor: '$white',
  padding: '1rem',
  marginTop: '1rem',
  position: 'relative',

  h2: {
    fontSize: '$medium',
    fontWeight: 600,
  },

  span: {
    fontSize: '$small',
    fontWeight: 600,
  },

  p: {
    color: '$gray500',
    fontWeight: 500,
    margin: '.5rem 0 .75rem'
  }
})

export const Label = styled('span', {
  position: 'absolute',
  top: 0,
  right: 0,
  padding: '.25rem .5rem',
  textTransform: 'uppercase',
  fontSize: '$small',
  fontWeight: 600,
  backgroundColor: '#002e9c',
  color: '$white',
  letterSpacing: 1,
  margin: '1rem',

  variants: {
    category: {
      atleticas: {
        backgroundColor: '#8ADF00',
        color: '#000'
      }
    }
  }
})
