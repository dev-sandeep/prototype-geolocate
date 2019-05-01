(function(window, undefined) {
  var dictionary = {
    "43ab0a67-ac17-4b36-94fe-71b557861f7a": "Form-address",
    "c759f6bd-38cc-467b-bf57-4700eef0b855": "Form-search-type",
    "c2f0c1d4-5bfd-41cb-bde7-6a3cd6ceaccb": "Form-family-members-age",
    "d01d758b-5a19-42bc-890d-da0200294307": "Form-family-amenities-1",
    "d6499fe4-8254-4f21-8970-543b7e13879c": "Form-family-office",
    "f65bc16e-cddc-4c74-b9fb-bc2c7126b172": "Form-family-members",
    "f6f9853d-27bd-491e-9eb3-c9eb2d0f99fb": "Form-family-car",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home Page",
    "93321790-e2a8-4e52-8752-42fd6ff2baff": "Form-family-budget",
    "3ac180ab-3d16-4399-82bf-7b2c9dd0090e": "final-data",
    "e73b655d-d3ec-4dcc-a55c-6e0293422bde": "960 grid - 16 columns",
    "ef07b413-721c-418e-81b1-33a7ed533245": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);