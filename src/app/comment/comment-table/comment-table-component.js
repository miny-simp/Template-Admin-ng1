'use strict';

define([
    'workspace/workspace.module',
    'text!comment/comment-table/comment-table-template.html',
    'css!comment/comment-table/comment-table.css'
], function(workspaceModule, CommentTableTemplate) {
    workspaceModule.component('commentTable', {
        template: CommentTableTemplate,
        controller: function() {}
    });
});
