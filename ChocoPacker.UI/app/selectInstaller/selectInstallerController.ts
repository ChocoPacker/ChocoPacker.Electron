import * as dialogService from '../services/dialogService'

export class SelectInstallerController {
    public installerPath: string;

    constructor(private scope: angular.IScope,
                private dialog: dialogService.IDialogService) {
    }

    async openSelectInstallerDialog() {
        const path = await this.dialog.showOpenFileDialog([{
            name: 'Installer Files',
            extensions: ['msi', 'exe']
        }]);

        this.installerPath = path;
        this.scope.$apply();
    }

    public static $inject = ['$scope',
                             'DialogService'];
}