// start load components

let DirName = 'dylan1517'

$(function () {
  var includes = $('[data-include]')
  if (window.location.pathname == `/${DirName}/`) {
    jQuery.each(includes, function () {
      var file = './components/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  } else {
    jQuery.each(includes, function () {
      var file = '../../components/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  }
})

// end load components

$(window).on('load', function () {
  // Handler for .load() called.
  //assign nav
  let RootPath = window.location.origin
  let navBar = document.getElementById('navbarResponsive')

  // set home link path
        
  document.getElementById('homePage').href = `${RootPath}/${DirName}` 
  // end set home link path

  let nav = ` <ul class="navbar-nav ml-auto">
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/emailValidator/">Email Validator</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/favthings/">FavThings</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/imperialCalculator/">imperial Cal</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/myschedule/">mySchedule</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/tipcal/">Tip Cal</a></li>
                                    <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/todo/">To Do</a></li>
                                            <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger"
                                            href="${RootPath}/${DirName}/projects/changeConfirmation/">Change Confirmation</a></li>
                    
                                </ul>`
  navBar.innerHTML = nav

  // end assign nav
})
