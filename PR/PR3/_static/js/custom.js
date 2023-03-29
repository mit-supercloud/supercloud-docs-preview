$( document ).ready(function() {

  // Create link and text for navigation back to the ORCD home page
  var supercloud_link = document.createElement("a");
  var supercloud_text = document.createTextNode("SuperCloud Home Page");
  supercloud_link.appendChild(supercloud_text);
  supercloud_link.setAttribute("href", "https://supercloud.mit.edu");

  // Open ORCD home page in new tab when clicked
  supercloud_link.setAttribute("target","_blank");

  var separator = document.createTextNode(" | ");

  // These items are right-aligned in the RTD theme breadcrumbs
  aside = document.querySelector("body > div > section > div > div > div:nth-child(1) > ul > li.wy-breadcrumbs-aside");

  // Next to the default "Edit on GitHub", add a separator, then the ORCD link.
  aside.appendChild(separator);
  aside.appendChild(supercloud_link);

  // Insert Project Name "SuperCloud User Documentation" below html_logo in sidebar navigation
  var project_name_link = document.createElement("a");
  var project_name_text = document.createTextNode("SuperCloud Documentation");
  project_name_link.appendChild(project_name_text);
  project_name_link.setAttribute("href", "https://mit-supercloud.github.io/supercloud-docs");
  project_name_link.classList.add("icon");
  project_name_link.classList.add("icon-home");
  wysidenavsearch = document.querySelector("body > div > nav > div > div.wy-side-nav-search > a");
  wysidenavsearch.appendChild(project_name_link);


  // For any external links in the main navigation, append the FontAwesome external link icon.
  function iconize_external_links(nav_level){
    a_elements = nav_level.getElementsByTagName("A");
    for (var i = 0; i < a_elements.length; ++i){
      if (a_elements[i].getAttribute("href").includes("http")){
         var icon = document.createElement("i");
         icon.classList.add("fa");
         icon.classList.add("fa-external-link");
         var spacer = document.createTextNode(" ");
         a_elements[i].appendChild(spacer);
         a_elements[i].appendChild(icon);
      }
    }
  }

  iconize_external_links(document.querySelector("body > div > nav > div > div.wy-menu.wy-menu-vertical"))

});
