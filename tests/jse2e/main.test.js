/**
 * Load utilities from the e2e-test-utils package.
 */
import { visitAdminPage } from '@wordpress/e2e-test-utils';

// Name of the test suite.
describe( 'Load notices plugin', () => {
	// Flow being tested.
	it( 'Should load properly the wp-notification-feature plugin', async () => {
		// Navigate the admin and performs tasks
		// Use Puppeteer APIs to interact with mouse, keyboard...
		await visitAdminPage( '/' );

		const dashArea = await page.waitForSelector(
			'#wp-notifications-dashboard .wp-notification h3'
		);

		// Assertions
		expect(
			await dashArea.evaluate( ( element ) => element.innerText )
		).toContain( 'Try this new Notification feature' );
	}, 10000 );

	// Flow being tested.
	it( 'Testing the wp-notification-feature hub', async () => {
		// Navigate the admin and performs tasks
		// Use Puppeteer APIs to interact with mouse, keyboard...
		await visitAdminPage( '/' );

		// Wait for wp notification feature bell icon on the adminbar
		const draftTitleField = await page.waitForSelector(
			'#wp-admin-bar-wp-notifications-hub'
		);

		// Wait for wp notification feature drawer to be loaded
		const drawer = await page.waitForSelector(
			'#wp-admin-bar-wp-notifications-hub .notifications'
		);

		// Assert the drawer not active
		expect(
			await drawer.evaluate( ( element ) =>
				element.classList.contains( 'active' )
			)
		).toBeFalsy();

		// Click the bell icon
		await draftTitleField.click();

		// Assert the drawer is active
		expect(
			await drawer.evaluate( ( element ) =>
				element.classList.contains( 'active' )
			)
		).toBeTruthy();
	}, 10000 );
} );
