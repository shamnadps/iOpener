cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewer",
        "file": "plugins/cordova-plugin-document-viewer/www/sitewaertsdocumentviewer.js",
        "pluginId": "cordova-plugin-document-viewer",
        "clobbers": [
            "cordova.plugins.SitewaertsDocumentViewer",
            "SitewaertsDocumentViewer"
        ]
    },
    {
        "id": "pspdfkit-cordova-android.PSPDFKit",
        "file": "plugins/pspdfkit-cordova-android/www/PSPDFKit.js",
        "pluginId": "pspdfkit-cordova-android",
        "clobbers": [
            "PSPDFKit"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-document-viewer": "0.8.0",
    "pspdfkit-cordova-android": "2.7.0"
};
// BOTTOM OF METADATA
});