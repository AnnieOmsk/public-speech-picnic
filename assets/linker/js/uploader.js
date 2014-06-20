UPLOADCARE_LOCALE = "ru";
UPLOADCARE_TABS = "file url facebook gdrive box skydrive instagram evernote vk";
UPLOADCARE_PUBLIC_KEY = "264908b8fcf4b91d058f";

$(function(){
    var widget = uploadcare.MultipleWidget('[role=uploadcare-uploader][data-multiple]');
    widget.onUploadComplete(function(info) {
        $('#').info.uuid
    });
})
