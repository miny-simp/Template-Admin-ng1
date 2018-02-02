'use strict';

define([
    'workspace/workspace.module',
    'text!permission/permission-table-template.html',
    'css!permission/permission-table.css'
], function(workspaceModule, PermissionTableTemplate) {
    workspaceModule.component('permissionTable', {
        template: PermissionTableTemplate,
        controller: function() {}
    });
});
