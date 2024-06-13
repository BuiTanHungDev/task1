$(document).ready(function () {
  // Hide navbar
  function hideNavbar() {
    $("#nav-mobile-input").prop("checked", false);
    $("body").removeClass("body-no-scroll");
  }

  function showNavbar() {
    $("#nav-mobile-input").prop("checked", true);
    $("body").addClass("body-no-scroll");
  }

  // Function to remove 'active' class from all li elements and add it to the clicked one
  function activateLink(element) {
    $('.header__navbar-item').removeClass('active');
    $(element).addClass('active');
  }

  // Functions to scroll to sections and activate li elements
  function scrollToHome() {
    $('#main_page')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToHome()"]').parent());
    hideNavbar();
  }

  function scrollToInfo() {
    $('#body_infor')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToInfo()"]').parent());
    hideNavbar();
  }

  function scrollToContactus() {
    $('#contactus')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToContactus()"]').parent());
    hideNavbar();
  }

  function scrollToOurworld() {
    $('#ourworld')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToOurworld()"]').parent());
    hideNavbar();
  }

  function scrollToBazaar() {
    $('#bazaar')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToBazaar()"]').parent());
    hideNavbar();
  }

  function scrollToCrew() {
    $('#crew')[0].scrollIntoView({ behavior: 'smooth' });
    activateLink($('a[onclick="scrollToCrew()"]').parent());
    hideNavbar();
  }

  // Assign functions to global scope so they can be called from HTML
  window.scrollToHome = scrollToHome;
  window.scrollToInfo = scrollToInfo;
  window.scrollToContactus = scrollToContactus;
  window.scrollToOurworld = scrollToOurworld;
  window.scrollToBazaar = scrollToBazaar;
  window.scrollToCrew = scrollToCrew;
});
