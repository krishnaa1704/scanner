/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["scanner/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
