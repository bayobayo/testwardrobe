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

function wait(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
    }
}

test.describe('NSITF', function() {

    test.beforeEach(function () {
        framework.launchBrowser();
        logs.gettestname(this.currentTest.title, this.currentTest.parent.title);
        framework.openURL(data.homepage['url'], data.homepage['title']);
        nsitf.nsitflogin(data['type'], data['login'], data['logininfo'], true, data['login'], data['logininfo']);
        nsitf.assessmentsmenu(data['type'], data['login'])
    });
    test.it('NSITF', function () {
        nsitf.exportassessmentdetails(data['type'], data['alltext'])
        

    });
    test.afterEach(function () {
        wait(10000);
        framework.closeBrowser();

    });
});