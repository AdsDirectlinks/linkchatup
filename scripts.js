document.addEventListener('DOMContentLoaded', function() {
document.querySelectorAll('.taburl').forEach(function(link){
    link.addEventListener('click', function(event){
        event.preventDefault();
   


 const url = link.getAttribute('data-url');

 
 window.open(url, '_blank');
 window.open(url, '_blank');
 window.open(url, '_blank');
 window.open(url, '_blank');
 window.open(url, '_blank');


 window.location.href = url;

});

});

});