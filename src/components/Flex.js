import React, { forwardRef } from 'react';
import Box from '@material-ui/core/Box';

// eslint-disable-next-line react/prop-types
const Flex = forwardRef(({ align, justify, wrap, direction, ...rest }, ref) => (
	<Box
		ref={ref}
		display='flex'
		flexDirection={direction}
		alignItems={align}
		justifyContent={justify}
		flexWrap={wrap}
		{...rest}
	/>
));

Flex.displayName = 'Flex';

export default Flex;
