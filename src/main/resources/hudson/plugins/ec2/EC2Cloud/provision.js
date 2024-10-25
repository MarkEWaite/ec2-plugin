Behaviour.specify("[data-type='ec2-provision']", 'ec2-provision', -99, function(e) {
  e.addEventListener("click", function (event) {
    const form = document.querySelector("form[name='provision']");
    form.querySelector("[name='template']").value = e.dataset.url;
    buildFormTree(form);
    form.submit();
  });
});