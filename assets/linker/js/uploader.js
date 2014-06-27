if (typeof(uploadcare) !== "undefined") {
    UPLOADCARE_LOCALE = "ru";
    UPLOADCARE_TABS = "file url facebook gdrive box skydrive instagram evernote vk";
    UPLOADCARE_PUBLIC_KEY = "264908b8fcf4b91d058f";
    UPLOADCARE_AUTOSTORE = true;

    $(function () {
        var sizeValidation = function(fileInfo) {
            if (fileInfo !== null) {
                if (fileInfo.size > 6000 * 1000) {
                    throw new Error('size');
                }
            }
        }

        var widget = uploadcare.MultipleWidget('[role=uploadcare-uploader][data-multiple]');
        widget.onUploadComplete(function (info) {
            $('#group-uuid').attr('value', info.uuid);
        });
        widget.validators.push(sizeValidation);
    });
}
