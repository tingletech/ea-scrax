var global_debug={},run_my_transform=function(){function a(a){b.push(a.message+" "+a.level+" "+a.time)}var b=[],c=Saxon.parseXML($($("#xml")[0].contentWindow.document).find("textarea").val()),d=Saxon.requestXML("http://socialarchive.iath.virginia.edu/xtf/cpf2html/cpf2html.xsl"),e=Saxon.newXSLT20Processor(d);Saxon.setErrorHandler(a);var f=e.transformToFragment(c,document),g=$("#html")[0].contentWindow.document;return $("body",g).html(f),!1},xml_editor_loaded=$.Deferred(),saxon_loaded=$.Deferred(),onSaxonLoad=function(){saxon_loaded.resolve()};$.when(xml_editor_loaded,saxon_loaded).done(function(){run_my_transform()});