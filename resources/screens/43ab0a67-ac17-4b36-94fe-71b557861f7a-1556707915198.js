jQuery("#simulation")
  .on("click", ".s-43ab0a67-ac17-4b36-94fe-71b557861f7a .click", function(event, data) {
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
                    "target": "screens/c759f6bd-38cc-467b-bf57-4700eef0b855"
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
  .on("mouseup", ".s-43ab0a67-ac17-4b36-94fe-71b557861f7a .mouseup", function(event, data) {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "transparent"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5": {
                      "attributes": {
                        "font-size": "10.0pt",
                        "font-family": "'OpenSans-Light',Arial"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5 .valign": {
                      "attributes": {
                        "vertical-align": "middle",
                        "text-align": "center"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5 span": {
                      "attributes": {
                        "color": "#FFFFFF",
                        "text-align": "center",
                        "text-decoration": "none",
                        "font-family": "'OpenSans-Light',Arial",
                        "font-size": "10.0pt"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5": {
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
  .on("mousedown", ".s-43ab0a67-ac17-4b36-94fe-71b557861f7a .mousedown", function(event, data) {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_1": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_2": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_3": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_4": {
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
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#DDDDDD"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5 span": {
                      "attributes": {
                        "color": "#282828"
                      }
                    }
                  },{
                    "#s-43ab0a67-ac17-4b36-94fe-71b557861f7a #s-Text_5": {
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
  });