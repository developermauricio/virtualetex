<!-- start Simple Custom CSS and JS -->
<script type="text/javascript">
 

function openTab( evt, tabName, tabcontent, tablinks ) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName(tabcontent);
  console.log('list: ', tabcontent.length);
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName(tablinks);
  console.log('list: ', tablinks.length);
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen051").click();
document.getElementById("defaultOpen088").click();
document.getElementById("defaultOpen077").click();</script>
<!-- end Simple Custom CSS and JS -->
