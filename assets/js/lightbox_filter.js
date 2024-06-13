$(document).ready(function () {
  const $filterItems = $(".body__ourworld-character-list-item");
  const $imageItems = $(".body__ourworld-image-item");

  let previousFilter = null;

  function filterImages(filterValue) {
      $imageItems.each(function () {
          const $image = $(this);
          const category = $image.data("category");
          if (filterValue === "all" || filterValue === category) {
              $image.show();
          } else {
              $image.hide();
          }
      });
  }

  $filterItems.on("click", function () {
      const $filter = $(this);
      const filterValue = $filter.data("filter");
      if (filterValue === previousFilter) {
          filterImages("all");
          previousFilter = null;
          // Remove active class from all filter items
          $filterItems.removeClass("active");
      } else {
          filterImages(filterValue);
          previousFilter = filterValue;
          // Remove active class from all filter items
          $filterItems.removeClass("active");
          // Add active class to the clicked filter item
          $filter.addClass("active");
      }
  });

  // Initially show all images
  filterImages("all");
});
