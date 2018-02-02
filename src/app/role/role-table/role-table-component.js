'use strict';

define([
    'workspace/workspace.module',
    'text!role/role-table/role-table-template.html',
    'css!role/role-table/role-table.css'
], function(workspaceModule, RoleTableTemplate) {
    workspaceModule.component('roleTable', {
        template: RoleTableTemplate,
        controller: function() {}
    });
});
