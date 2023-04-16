/* JEST unit testing */

import { purify } from '../../src/scripts/utils/sanitization';

describe( 'purify works', () => {
	it( 'do not break html', () => {
		expect( purify( '<div>sadsadsad</div>' ) ).toMatchObject( {
			__html: '&lt;div>sadsadsad&lt;/div>',
		} );
	} );
} );

describe( 'boilerplate test', () => {
	it( 'it can make simple additions', () => {
		expect( 1 + 2 ).toBe( 3 );
	} );
} );
