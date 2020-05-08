// start load components
$(function () {
  var includes = $('[data-include]')
  jQuery.each(includes, function () {
    var file = './components/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
})

// end load components

$(window).on('load', function () {
  // Handler for .load() called.
  //assign nav
  let RootPath = 'https://localhost/dylan1517/'
  let navBar = document.getElementById('navbarResponsive')

  let nav = ` <ul class="navbar-nav ml-auto">
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/emailValidator/">Email Validator</a></li>
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/favthings/">FavThings</a></li>
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/imperialCalculator/">imperial Cal</a></li>
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/myschedule/">mySchedule</a></li>
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/tipcal/">Tip Cal</a></li>
                                  <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/todo/">To Do</a></li>
                  
                                          <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                          href="${RootPath}projects/changeConfirmation/">CHANGE CONFIRMATION</a></li>
                              </ul>`
  navBar.innerHTML = nav

  // end assign nav
})
