;
var global_debug = {};


var run_my_transform = function () {

  var errors = [];

  var xml  = Saxon.parseXML($($( '#xml')[0].contentWindow.document).find('textarea').val()); 
  var xslt = Saxon.requestXML('http://socialarchive.iath.virginia.edu/xtf/cpf2html/cpf2html.xsl');

  var proc = Saxon.newXSLT20Processor(xslt);
  // Saxon.setLogLevel('FINE');
  Saxon.setErrorHandler(handler);
  var fragment = proc.transformToFragment(xml, document);

  var d = $("#html")[0].contentWindow.document;
  $("body", d).append(fragment);
  
  function handler(saxonError) {
    errors.push(saxonError.message + " " + saxonError.level + " " + saxonError.time);
  }

  // http://tingletech.tumblr.com/post/81315608445/
  function stringToXML(oString) {
    //code for IE
    if (window.ActiveXObject) { 
      return (new ActiveXObject("Microsoft.XMLDOM")).loadXML(oString);
    } else { // code for Chrome, Safari, Firefox, Opera, etc. 
      return (new DOMParser()).parseFromString(oString, "text/xml");
    }
  }
  return false;
};
$(function() {
  var x = $(".xml_editor").resizable({
    alsoResize : '#xml'
  });
});
