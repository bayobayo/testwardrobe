/**
 * Created by Raphael Edwards.
 * Adapted to NSITF by Adebayo Akinbi.
 * For SoftAlliance
 */

var nsitf = require('../../framework/nsitf');
var config = require('../../dataconfig');
var data = config.confData;
var test = require('selenium-webdriver/testing');
var framework = require('../../action');
var logs = require('../../log');

test.describe('NSITF', function() {

    test.beforeEach(function () {
        framework.launchBrowser();
        logs.gettestname(this.currentTest.title, this.currentTest.parent.title);
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo'])
    });
    test.it('NSITF', function () {
        //framework.openURL(data.homepage['regionsurl'], data.homepage['regionstitle']);
        nsitf.usersmenu(data['type'], data['login']);
        nsitf.allstatictext1(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext2(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext3(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext4(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext5(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext6(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext7(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext8(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext9(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext10(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext11(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext12(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext13(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext14(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext15(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext16(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext17(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext18(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.allstatictext19(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext8(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext40(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext41(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext42(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext43(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext44(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext45(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext46(data['type'], data['alltext'], data['alltextinfo']);
        nsitf.alldynamictext47(data['type'], data['alltext'], data['alltextinfo']);
    });
    test.afterEach(function () {
        framework.closeBrowser();

    });
});