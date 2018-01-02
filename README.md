# ![logo-forma](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/logo-readme.png "Lyft") 
Desarrollo de una web-app que replica el sitio de [Lyft](https://www.lyft.com/conduce-con-lyft?loc_physical_ms=9060924&utm_term=lyft&adgroup=lyft_NA_NA&adposition=1t1&route_key=paid&devicemodel=&utm_campaign=PAID_DAX_SRCH_US_ALL_WEB_ALL_BRND_LYFT_EXACT&gclid=Cj0KCQiA1afSBRD2ARIsAEvBsNmxWUttC8AcJC_CcIfaAac9G63TzwbPjsZSsePxtHk3ZUen-2UccQcaAkJ5EALw_wcB&ref=500R150D45&targetid=aud-391972687605%3Akwd-297744317218&campaign_id=874705432&utm_source=google&network=g&ad_id=&device=c&k_clickid=ee23daa0-de23-47b3-b2bd-41b5f8d3fa8e&matchtype=e&adname=Freedom_V1_TXT_NA_SO&placement=&adgroup_id=46539221440&loc_interest_ms=21150), en este reto se debian cumplir los pasos necesarios para que el usuario pueda registrarse.
## Flujo de la App
Vista splash con duración de 2 a 5 segundos que redirecciona a lau vista de inicio. La vista de inicio cuenta con dos botones sign up y log in.
![Pagina Web](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/splash.gif "lyft-jQuery")
En la siguiente vista tenemos un formulario donde nuestro usuario puede escoger el país y debe ingresar su número de teléfono. El botón de NEXT se encuentra desabilitado hasta que el usuario escoja su pais de procedencia e introduzca su numero de telefono que debe tener 9 digitos.
Una vez ingresado el número de teléfono se habilita el botón y al dar click envia una alerta con un código generado aleatoriamente (LAB-000) y redireccionar a la siguiente vista. 
![Pagina Web](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/bandera.gif "lyft-jQuery")
En esta vista se debe ingresar el código dado anteriormente y una vez hecho esto se habilita el botón que redirecciona al usuario a la vista donde ingresa sus datos. Si por alguna razon el usuario olvido su codigo, tiene la opcion de obtener uno nuevo.
![Pagina Web](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/codigo.gif "lyft-jQuery")
Para ingresar sus datos un formulario solicita el nombre del usuario, el apellido y el correo electrónico. El usuario de be de rellenar todas las casilla y darle click al checkbox para que se habilite en siguiente boton.
![Pagina Web](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/form.gif "lyft-jQuery")
Ya que se ha realizado lo anterior, sólo se le muestra al usuario una vista que le indica que ha concluido con el registro exitosamente. 
### Log in
Una vez el usuario se ha registrado puede acceder a su cuenta.
![Pagina Web](https://github.com/Gloper98/lyft-jQuery/raw/master/assets/images/varios.gif "lyft-jQuery")
