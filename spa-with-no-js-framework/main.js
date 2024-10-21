// MAIN js file to handle the routing and other stuff

// outlet element
const outlet = document.getElementById("outlet");
const navLink = document.querySelectorAll("header nav a");

const initialPath = "home";
// current route
let currentRoute = "";

// global route config list
/**
 *  route consist of
 *  id : element id of the link
 *  pagePath : path to the html file of that page
 *  title : title for page
 *  description : description for page
 *  init : function for initializing the page with dynamic content and event-listerns 
 */
const ROUTES = {
  404: {
    //  route for unknown path
    id: null,
    pagePath: "./pages/404.html",
    title: "404 | SPA",
    description: "404 Page not found",
    init: () => {
      console.log("404 Page is initialized");
    }
  },
  "home": {
    id: "home",
    pagePath: "./pages/home.html",
    title: "Home | SPA",
    description: "Furnish: A small river named Duden flows by their place and supplies it with the necessary.",
    init: () => {
      console.log("Home Page is initialized");
    }
  },
  "about": {
    id: "about",
    pagePath: "./pages/about.html",
    title: "About | SPA",
    description: "About Furnish",
    init: () => {
      console.log("About Page is initialized");
    }
  },
  "collection": {
    id: "collection",
    pagePath: "./pages/collection.html",
    title: "Collection | SPA",
    description: "Furnish Collection Page",
    init: () => {
      console.log("Collection Page is initialized");
    }
  }
}


/**
 * We are creating SPA by using JS only,
 * 1. So we are firstly listening to click events that are dispached by navigation links and preventing it from default action.
 * 2. Then we are pushing the new state into history
 * 3. On based of the new path in URL , we are fetching the template and initializing it with required events.
 */

const anchor = document.querySelectorAll("a");
anchor.forEach((a) => {
  a.addEventListener("click", e => {
    e.preventDefault();
    const { target } = e;

    // handling route
    const href = e.target.href || e.target.form.action;
    window.history.pushState({}, "", href);

    routeHandler();
  })
})

const routeHandler = async () => {
  const href = window.location.href;
  let location = window.location.pathname.split('/').pop();       // for getting the last pathname.
  if (location.length === 0) {
    location = initialPath;
    window.history.pushState({}, "", location);
  }

  const route = ROUTES[location] || ROUTES[404];
  // console.log({ route })
  // check if current url is same
  if (currentRoute === href) return;

  // highlight the link on header
  navLink.forEach(a => {
    a.setAttribute("active", href.includes(a.href) ? "true" : "false")
  })

  // get page html doc from path
  const html = await fetch(route.pagePath).then(res => res.text())

  outlet.innerHTML = html;
  document.title = route.title;
  document.querySelector('meta[name="description"]')?.setAttribute('content', route.descripton);

  currentRoute = href;

  if (route.init) {
    route.init();
  }

}

window.onpopstate = routeHandler;
routeHandler()
