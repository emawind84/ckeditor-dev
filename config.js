﻿/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
	/**
	 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
	 * For licensing, see LICENSE.md or http://ckeditor.com/license
	 */

	config.skin = 'sangah';
	config.plugins = 'dialogui,dialog,a11yhelp,basicstyles,blockquote,clipboard,button,panelbutton,panel,floatpanel,colorbutton,colordialog,menu,contextmenu,dialogadvtab,elementspath,enterkey,entities,find,floatingspace,listblock,richcombo,font,format,horizontalrule,htmlwriter,image,indent,indentblock,indentlist,justify,fakeobjects,link,list,liststyle,magicline,maximize,newpage,pagebreak,pastefromword,pastetext,preview,print,removeformat,resize,selectall,showblocks,showborders,sourcearea,specialchar,stylescombo,tab,table,tabletools,tableresize,toolbar,undo,wysiwygarea,codemirror,imageattacher';
	config.codemirror = {
		showFormatButton: false,
		showCommentButton: false,
		showUncommentButton: false,
		showAutoCompleteButton: false
	};
	config.allowedContent = true;
	//config.extraAllowedContent = '*(*){*}[*]';
	config.language = __LOCALE__ || 'en';
	config.contentsCss = ['/ext/ckeditor-dev/content_reset.css','/ext/ckeditor-dev/contents.css'];
	config.docType = '<!DOCTYPE html>';
	//config.fullPage = true;
	config.removePlugins = 'base64image';
	config.removeButtons = 'Image';
	
	CKEDITOR.dtd.$removeEmpty.span = 0;
	
};

CKEDITOR.download = function(editor, name){
	editor.once('contentPreview', function(e){
		console.log(e.data);
		// download data here
		$.ajax({
			url: "/Common/TemporaryFile/uploadContent.action",
			data: {
				"content" : e.data.dataValue
			},
			type: "POST",
			dataType: "json"
		}).done(function(data) {
			$.fileDownload( "/Common/TemporaryFile/download.action?" + $.param({
				"fileId": data.fileId,
				"fileName": name||'editor.html'
			}));
		});
		
		
		return false;
	});
	editor.execCommand('preview');
}

CKEDITOR.print = function(editor){
	editor.execCommand('print');
}

// %LEAVE_UNMINIFIED% %REMOVE_LINE%