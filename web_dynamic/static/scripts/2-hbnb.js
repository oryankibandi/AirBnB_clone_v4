$(document).ready(() => {
  const status = $("header #api_status");
  const inp = $("input");
  let ids = [];
  const h4amen = $(".amenities h4");
  inp.on("change", () => {
    if (inp.prop("checked")) {
      ids.push(inp.attr("data-id"));
      h4amen.append("<p>" + inp.attr("data-name") + "</p>");
    } else {
      let idx = ids.indexof(inp.attr("data-id"));
      ids.splice(idx, 1);
    }
  });

  $.ajax({
    type: "GET",
    url: "http://0.0.0.0:5001/api/v1/status/",
    success: (data) => {
      if (data.status === "OK") {
        status.addClass("available");
      } else {
        status.removeClass("available");
      }
    },
  });
});
