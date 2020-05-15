const waitForJQueryForm = setInterval(function () {
  if (typeof $ != "undefined") {
    $(function () {
      const requiredCheckboxes = $(":checkbox[required]");

      requiredCheckboxes.change(function () {
        if (requiredCheckboxes.is(":checked")) {
          requiredCheckboxes.removeAttr("required");
        } else {
          requiredCheckboxes.attr("required", "required");
        }
      });
    });
    clearInterval(waitForJQueryForm);
  }
}, 10);
