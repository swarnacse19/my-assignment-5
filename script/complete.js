document.getElementById("completed")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();         
      getActivation("mobile");
      disable("completed");
  });

document.getElementById("completed1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();
      getActivation("dark");
      disable("completed1");
});

document.getElementById("completed2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();
      getActivation("home");
      disable("completed2");
});

document.getElementById("completed3")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();
      getActivation("emoji");
      disable("completed3");
});

document.getElementById("completed4")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();
      getActivation("ai");
      disable("completed4");
});

document.getElementById("completed5")
  .addEventListener("click", function (event) {
    event.preventDefault();
    alert('Board Updated Successfully');
      count();
      getActivation("job");
      disable("completed5");
});