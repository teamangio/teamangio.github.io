import { createTheme } from '@mui/material/styles'
import { responsiveFontSizes } from '@mui/material'

const customTheme = {
  palette: {
    background: {
      default: '#eee',
    },
  },
}

const theme = responsiveFontSizes(createTheme(customTheme))

export default theme
