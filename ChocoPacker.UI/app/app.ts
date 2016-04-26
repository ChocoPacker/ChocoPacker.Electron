import {SelectInstallerController} from './selectInstaller/selectInstallerController'
import * as dialogService from './services/dialogService'

// Application orchestration happens here
(function () {
    ($(document) as any).foundation();
    const angular = require('angular') as angular.IAngularStatic;
    const app = angular.module('ChocoPacker', []);
    app.factory('DialogService', dialogService.DialogService);
    app.controller('SelectInstallerController', SelectInstallerController);
})();