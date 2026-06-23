/* JEST unit testing */
import { WEEK_IN_MILLISECONDS } from '../../src/scripts/constants';
import { formatDate, nowInSeconds, splitByDate } from '../../src/scripts/utils';
import { purify } from '../../src/scripts/utils/sanitization';

describe( 'purify works', () => {
	it( 'do not break html', () => {
		expect( purify( '<div>sadsadsad</div>' ) ).toMatchObject( {
			__html: '&lt;div>sadsadsad&lt;/div>',
		} );
		expect( purify( '<div>sadsadsad</div>' ) ).not.toMatchObject( {
			__html: '<div>sadsadsad</div>',
		} );
	} );
} );

describe( 'time functions are working', () => {
	it( 'return a date', () => {
		expect( nowInSeconds() ).toBeTruthy();
	} );

	it( 'return the correct day name', () => {
		expect( formatDate( new Date() ) ).toContain(
			new Date().toLocaleString( 'en-us', { weekday: 'long' } )
		);
	} );

	it( 'can sort correctly the dates', () => {
		expect(
			splitByDate( [
				{
					date: new Date(),
					title: 'new Date()',
				},
				{
					date: new Date( Date.now() - WEEK_IN_MILLISECONDS * 0.002 ),
					title: 'new Date( Date.now() - WEEK_IN_MILLISECONDS * 0.002 )',
				},
				{
					date: new Date( Date.now() - WEEK_IN_MILLISECONDS * 2 ),
					title: 'new Date( Date.now() - WEEK_IN_MILLISECONDS * 2 )',
				},
			] )
		).toMatchObject( [
			[
				{
					date: new Date(),
					title: 'new Date()',
				},
				{
					date: new Date( Date.now() - WEEK_IN_MILLISECONDS * 0.002 ),
					title: 'new Date( Date.now() - WEEK_IN_MILLISECONDS * 0.002 )',
				},
			],
			[
				{
					date: new Date( Date.now() - WEEK_IN_MILLISECONDS * 2 ),
					title: 'new Date( Date.now() - WEEK_IN_MILLISECONDS * 2 )',
				},
			],
		] );
	} );
} );
