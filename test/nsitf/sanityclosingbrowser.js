/**
 * Created by Raphael Edwards.
 * Adapted to NSITF by Adebayo Akinbi.
 * For SoftAlliance
 */

var nsitf = require('../../framework/NSITF');
var config = require('../../dataconfig');
var data = config.confData;
var test = require('selenium-webdriver/testing');
var framework = require('../../action');
var logs = require('../../log');

test.describe('NSITF', function() {

    test.beforeEach(function () {
        framework.launchBrowser();
        logs.gettestname(this.currentTest.title, this.currentTest.parent.title);
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], false, data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
        //nsitf.home(data['type'], data['login']);
        nsitf.createregion(data['type'], data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
        //nsitf.home(data['type'], data['login']);
        nsitf.editregion(data['type'], data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
        //nsitf.home(data['type'], data['login']);
        nsitf.searchregion(data['type'], data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
        //nsitf.home(data['type'], data['login']);
        nsitf.exportregiondetails(data['type'], data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
        nsitf.home(data['type'], data['login']);
        nsitf.region(data['type'], data['login']);
        nsitf.deactivateregion(data['type'], data['login'], data['logininfo'])
    });

    
    test.afterEach(function () {
        framework.closeBrowser();

    });
});