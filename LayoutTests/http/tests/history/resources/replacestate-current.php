<html>
<head>
<script>
function test()
{
    if (sessionStorage["state"] != 1) {
        sessionStorage["state"] = 1;
        history.replaceState("new state", "new title");
        history.go(0);
    } else {
        sessionStorage.removeItem("state");
        if (window.layoutTestController)
            layoutTestController.notifyDone();
    }
}
</script>
</head>
<body onload="test()">
<p>
If the current entry in the session history represents a non-GET request
(e.g. it was the result of a POST submission) then update it to instead
represent a GET request (or equivalent).
</p>
<p>
This test checks that this works when reloading the page using history.go(0).
</p>
<p>
This test passes if this page is eventually loaded with a GET request.
</p>
<p>
This page was loaded with a <?php echo $_SERVER['REQUEST_METHOD'] ?> request.
</p>
</body>
