import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	overrides: {
		MuiCssBaseline: {
			'@global': {
				html: {
					WebkitFontSmoothing: 'auto',
				},
				a: {
					textDecoration: 'none',
					cursor: 'pointer',
				},
			},
		},
	},
	palette: {
		green: {
			50: '#E7F5E7',
			400: '#48A548',
			500: '#48A648',
			900: '#0B3B0B',
		},
		gray: {
			50: '#F8FAF8',
			100: '#9D9D9D29',
			200: '#DEDEDE',
			300: '#D3D3D3',
			400: '#9F9F9F',
			500: '#909090',
			600: '#767676',
			700: '#707070',
			800: '#6f6f6f',
			900: '#505050',
		},
	},
});

export default theme;
