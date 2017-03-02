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
        "id": "cordova-plugin-document-viewer.SitewaertsDocumentViewerProxy",
        "file": "plugins/cordova-plugin-document-viewer/src/windows/sitewaertsdocumentviewerProxy_native.js",
        "pluginId": "cordova-plugin-document-viewer",
        "merges": [
            ""
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-document-viewer": "0.8.0"
};
// BOTTOM OF METADATA
});