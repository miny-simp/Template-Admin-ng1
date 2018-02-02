'use strict';

define([
    'workspace/workspace.module',
    'text!post/post-table/post-table-template.html',
    'css!post/post-table/post-table.css'
], function(workspaceModule, PostTableTemplate) {
    workspaceModule.component('postTable', {
        template: PostTableTemplate,
        controller: function($state) {
        	this.gotoWritePost=function(){
        		$state.go('writepost');
        	};
        }
    });
});
