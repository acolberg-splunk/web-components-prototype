import "./styles.scss";
import "./webcomponents/single-metric-tile.js";
import "./webcomponents/signal-tile.js";
import "./webcomponents/large-tile.js";
/*import React from "react";
import ReactDOM from "react-dom";
import Tabs from "./TabBar";*/

//import "./src/charts.js";
//import * as d3 from 'd3'
//document.getElementById("app").innerHTML = ` `;

//ES6 support
var supportsES6 = (function () {
  // https://gist.github.com/bendc/d7f3dbc83d0f65ca0433caf90378cd95
  try {
    new Function("(a = 0) => a");
    return true;
  } catch (err) {
    return false;
  }
})();

//Random Int, Dec, and List functions
(function () {
  Math.randomInt = function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
  };
  Math.randomDec = function (min, max, decimals) {
      return (Math.random() * (max - min) + min).toFixed(decimals || 2);
  };
  Math.randomList = function (list) {
      return list[Math.randomInt(0, list.length)];
  };
})();



// Reports current viewport width and font-size
function reporting(reportId, w, d) {
  //"use strict";
  if (!supportsES6) return false;

  const report = d.getElementById(reportId);
  if (!report) return false;
  const height = window.innerHeight;
  const width = w.innerWidth;
  const fontSize = w
    .getComputedStyle(report, null)
    .getPropertyValue("font-size");

  report.innerHTML = `Current font-size: <i>${fontSize} @ ${parseInt(
    width,
    10
  )}px x ${height}px  </i> viewport width / height`;

  w.requestAnimationFrame(function () {
    reporting(reportId, w, d);
  });
}

reporting("report1", window, document);

//var closer = document.querySelector(".closer");

// Tile tile
var renderTitles = function (dtTitle, node) {
  node.innerHTML = dtTitle;
};

//var dtTitle = "A Long Title " + ;
var title = document.getElementsByClassName("dt-title");

var i;

for (i = 0; i < title.length; i++) {
  var dtTitle = "Module Title " + i;
  renderTitles(dtTitle, title[i]);
}

//add subtitle
var renderDesc = function (dtDesc, node) {
  node.innerHTML = dtDesc;
};

var dtDesc = "Subtitle that is long and wraps to two lines";
var subtitle = document.getElementsByClassName("dt-subtitle");
var rand = Math.randomList(['arrow_upward', 'arrow_downward', 'remove']);
for (i = 0; i < subtitle.length; i++) {
  renderDesc(dtDesc, subtitle[i]);
}
//add metric to tile
var dtMetric = "<span>" + Math.randomDec(0, 6, 2) + "<sub data-value="  + rand +  "><i class='material-icons'>" + rand +  "</i>" + Math.randomInt(0, 10) +  "</sub><span>";
var metricnum = document.getElementsByClassName("dt-metric");

var renderMetrics = function (dtMetric, node) {
  node.innerHTML = dtMetric;
};

for (i = 0; i < metricnum.length; i++) {
 renderMetrics(dtMetric, metricnum[i]);

}

var home = document.querySelector("#nav-toggle:not(.wrapper)");
var close = document.querySelector(".close");
var sideNav = document.querySelector(".side-nav");
var mainContent = document.querySelector(".wrapper");
var wrapper = document.querySelector(".wrapper:not(#nav-toggle)");

//var workspaces = document.querySelectorAll(".workspace");

//var preview = document.querySelector(".workspace-preview");

//var pt = document.querySelector("preview-title");

/*for (i = 0; i < workspaces.length; i++) {
  workspaces[i].addEventListener("mouseover", function () {
    //[].forEach.call(workspaces, function(preview) {
    //if(preview.classList.contains("hidden")){
    //for (i = 0; i < workspaces.length; ++i) {
    //pt.innerHTML = "Hello" + i;
    preview.classList.remove("hidden");

    //};
  });
}
for (i = 0; i < workspaces.length; i++) {
  workspaces[i].addEventListener("mouseout", function () {
    preview.classList.add("hidden");
  });
}
wrapper.addEventListener("click", function (event) {
  //alert("wrapper:" + sideNav.classList)
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
  }
  event.stopPropagation();
});

home.addEventListener("click", function (event) {
  if (!sideNav.classList.contains("js-not-hidden")) {
    event.stopPropagation();
    sideNav.classList.add("js-not-hidden");
    //alert("home:" + sideNav.classList)
  }
});
*/

wrapper.addEventListener("click", function (event) {
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
    mainContent.classList.remove("push-in");
  }
  event.stopPropagation();
});
close.addEventListener("click", function (event) {
  if (sideNav.classList.contains("js-not-hidden")) {
    sideNav.classList.remove("js-not-hidden");
    mainContent.classList.remove("push-in");
  }
  event.stopPropagation();
});
home.addEventListener("click", function (event) {
  if (!sideNav.classList.contains("js-not-hidden")) {
    event.stopPropagation();
    sideNav.classList.add("js-not-hidden");
    mainContent.classList.add("push-in");
    //todo overlay
    //document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
});


/* Resize the browser to 1024px to see the first breakpoint, the second breakpoint is at 600px*/

//Breakpoint Detector
// Setup the breakpoint variable
var breakpoint;

// Get the current breakpoint
var getBreakpoint = function () {
  return window
    .getComputedStyle(document.body, ":before")
    .content.replace(/"/g, "");
};

// For this demo only
// Display breakpoint value in the DOM
var displayBreakpoint = function () {
  document.querySelector("#breakpoint").innerHTML = "<i>" + breakpoint + "</i>";
};

// Calculate breakpoint on page load
breakpoint = getBreakpoint();

// For this demo only
// Display breakpoint value in the DOM
displayBreakpoint();

// Recalculate breakpoint on resize
window.addEventListener(
  "resize",
  function () {
    breakpoint = getBreakpoint();

    // For this demo only
    // Display breakpoint value in the DOM
    displayBreakpoint();
  },
  false
);





