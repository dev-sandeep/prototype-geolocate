jQuery("#simulation")
  .on("click", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d6499fe4-8254-4f21-8970-543b7e13879c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mouseup", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .mouseup", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "transparent",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("mousedown", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .mousedown", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_1": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_2": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_3": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_4": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Text_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-93321790-e2a8-4e52-8752-42fd6ff2baff #s-Text_5": {
                      "attributes-ie": {
                        "-pie-background": "#DDDDDD",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("drag", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .drag", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Rectangle_5" ],
                    "top": {
                      "type": "nomove"
                    },
                    "left": {
                      "type": "movewithcursor",
                      "value": null
                    },
                    "containment": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("dragend", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .drag", function(event, data) {
    jimEvent(event).jimRestoreDrag(jQuery(this));
  })
  .on("dragend", ".s-93321790-e2a8-4e52-8752-42fd6ff2baff .drag", function(event, data) {
    jimEvent(event).jimDestroyDrag(jQuery(this));
  });