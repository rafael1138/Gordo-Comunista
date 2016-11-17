(function() {
  walk(document.body);

  function walk(node) {
    // This wonderful function was made by T.J. Crowder
    // Check it out here: http://stackoverflow.com/a/5904945
    var child, next;

    switch (node.nodeType) {
      case 1:
      case 9:
      case 11:
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;
      case 3:
        maduroText(node);
        break;
    }
  }
  //Here is where the anti-comunist fairs do the job
  function maduroText(textNode) {
    var val = textNode.nodeValue;


    val = val.replace(/Nicolás/g, "Gordo");
    val = val.replace(/nicolás/g, "gordo");
    val = val.replace(/Nicolas/g, "Gordo");
    val = val.replace(/nicolas/g, "gordo");
    val = val.replace(/Maduro/g, "Comunista");
    val = val.replace(/maduro/g, "comunista");
    val = val.replace(/Moros/g, "Feo");
    val = val.replace(/moros/g, "feo");

    textNode.nodeValue = val;
  }

})();