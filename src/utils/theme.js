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
				ul: {
					margin: '0px',
					listStyle: 'none',
					padding: '0px',
				},
			},
		},
	},
	palette: {
		green: {
			50: '#E7F5E7',
			100: '#D9F5D9',
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

			1000: '#F0F0F0', // still light-ish gray
			1100: '#F8F8F8', // still light-ish gray
			1200: '#777676', // still light-ish gray

			1300: '#6E6E6E', // some dark gray
		},
	},
});

// console.log(theme);

export default theme;
