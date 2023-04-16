/* JEST unit testing */
import { nowInSeconds } from '../../src/scripts/utils';
import { purify } from '../../src/scripts/utils/sanitization';

describe( 'purify works', () => {
	it( 'do not break html', () => {
		expect( purify( '<div>sadsadsad</div>' ) ).toMatchObject( {
			__html: '&lt;div>sadsadsad&lt;/div>',
		} );
	} );
} );

describe( 'time functions are working', () => {
	it( 'do not break html', () => {
		expect( nowInSeconds() ).toBeGreaterThan( 123 );
	} );
} );
