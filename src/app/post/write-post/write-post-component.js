'use strict';

define([
    'workspace/workspace.module',
    'text!post/write-post/write-post-template.html',
    'css!post/write-post/write-post.css'
], function(workspaceModule, WritePostTemplate) {
    workspaceModule.component('writePost', {
        template: WritePostTemplate,
        controller: function() {
            tinymce.init({
                selector: '#post_editor'
            });
        }
    });
});
