

function activarLoading()
{      
   

    modal.show();
    setTimeout(function(){
            modal.hide();
    } , 10000);

    app.slidingMenu.setMainPage('resultados.html', {closeMenu: true});
    
  
}



