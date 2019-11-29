import { Injectable } from '@angular/core';

declare var toastr: any;

@Injectable()
export class Helper {

    constructor() { }

    showAlertMessage(message: string, alertType: string) {
        if (alertType == "error") {
            toastr.options = {
                "closeButton": true,
                "timeOut": 0,
                "preventDuplicates": true,
                "extendedTimeOut": 0,
                "positionClass": "toast-top-center",
            }
            toastr.error(message, "Error").attr('style', 'width: 400px !important');
        }
        else if (alertType == "success") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 5000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            }
            toastr.success(message).attr('style', 'width: 400px !important');
        }
        else if (alertType == "info") {
            toastr.options = {
                "closeButton": false,
                "timeOut": 5000,
                "extendedTimeOut": 1000,
                "positionClass": "toast-top-center",
            }
            toastr.info(message).attr('style', 'width: 400px !important');
        }
    }

    formatBytes(bytes: number, decimals: number) {
        if (bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));

        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    popupCenter(url, title, w, h) {
        // Fixes dual-screen position Most browsers Firefox
        var dualScreenLeft = window.screenLeft;
        var dualScreenTop = window.screenTop;

        var width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
        var height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

        var left = ((width / 2) - (w / 2)) + dualScreenLeft;
        var top = ((height / 2) - (h / 2)) + dualScreenTop;
        var newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left);

        // Puts focus on the newWindow
        if (window.focus) {
            newWindow.focus();
        }
    }
}
