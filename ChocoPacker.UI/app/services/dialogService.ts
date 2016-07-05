export interface IDialogService {
    showOpenFileDialog(fileTypes: IFileType[]): Promise<string>;
}

export interface IFileType {
    name: string;
    extensions: string[];
}

export class DialogService implements IDialogService {
    private dialog: any;

    constructor() {
        const {dialog} = require('electron').remote;
        this.dialog = dialog;
    }

    showOpenFileDialog(fileTypes: IFileType[]): Promise<string> {
        const result = new Promise<string>((resolve) => {
            this.dialog.showOpenDialog({ filters: fileTypes }, (fileName) => {
                if (!fileName) {
                    return;
                }

                resolve(fileName);
            });
        });

        return result;
    }
}