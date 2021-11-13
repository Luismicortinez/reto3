const datosEstudiantes = [{
    
    nombre: "Eduardo Marin Arango",
    foto: "images/Eduardo.jpeg",
    github: "https://github.com/Emarinar",
    neocites: "https://neocities.org/site/edumarinar",
    email: "eduardo.marin.1990@hotmail.com",
    telefono: "3016071269",
    actividades: [{
        actividad: "actividad 1",
        estadouiux: "5%",
        estadotecnico: "2%"
    },
    {
        actividad: "actividad 1",
        estadouiux: "5%",
        estadotecnico: "2%"
    },
    {
        actividad: "actividad 1",
        estadouiux: "5%",
        estadotecnico: "2%"
    }
],
    valoraciones: {
    valhtml: "3%",
    valcss: "4%",
    valjs: "6%",
    valui: "4%",
    valux: "9%"
}},
{
    nombre: "Valentina Alzate Hincapié",
    foto: "images/Vale.png",
    github: "https://github.com/mirepositorio",
    neocites: "miportafolio.neocities.org",
    email: "estudiante@dominio.com",
    telefono: "3125678900",
    actividades: [{
        actividad: "actividad 1",
        estadouiux: "5%",
        estadotecnico: "2%"
    },
    {
        actividad: "actividad 2",
        estadouiux: "5%",
        estadotecnico: "2%"
    },
    {
        actividad: "actividad 3",
        estadouiux: "5%",
        estadotecnico: "2%"
    }
],
    valoraciones: {
    valhtml: "8%",
    valcss: "4%",
    valjs: "6%",
    valui: "4%",
    valux: "9%"
}
},
{
nombre: "Cristian Alzate",
foto: "images/Cristian.png",
github: "https://github.com/Emarinar",
neocites: "https://neocities.org/site/edumarinar",
email: "eduardo.marin.1990@hotmail.com",
telefono: "3016071269",
actividades: [{
    actividad: "actividad 1",
    estadouiux: "5%",
    estadotecnico: "2%"
},
{
    actividad: "actividad 1",
    estadouiux: "5%",
    estadotecnico: "2%"
},
{
    actividad: "actividad 1",
    estadouiux: "5%",
    estadotecnico: "2%"
}
],
valoraciones: {
valhtml: "3%",
valcss: "4%",
valjs: "6%",
valui: "4%",
valux: "9%"
}
}];




function Plantilla(datos) {
return `
<div class="container">
        
<div class="Name"><h1 class="nombre">${datos.nombre}</h1></div>
<div class="Foto1"><img src="${datos.foto}" class="fotoed"></div>
<div class="Enlaces">
    <ul class="contenla">
        <li><img src="/images/github-brands.svg" alt=""><a href="${datos.github}">GitHub</a></li>
        <li><img src="/images/network-wired-solid.svg" alt=""><a href="${datos.neocites}">Neocites</a></li>
        <li><img src="/images/envelope-square-solid.svg" alt=""><a href="">${datos.email}</a></li>
        <li><img src="/images/telefono-brands.svg" alt=""><a href="">${datos.telefono}</a></li>
    </ul>
</div>

<div class="Actividades">
<table class="tabla">
    <tr>
        <th>Actividades</th>
        <th>%UI/UX</th>
        <th>%dev</th>
    </tr>
    <tr>
    <td>Actividad 1</td>
    <td>${datos.actividades[0].actividad}</td>
    <td>${datos.actividades[0].estadouiux}</td>
    <td>${datos.actividades[0].estadotecnico}</td>

    </tr>
    <tr>
        
        <td>10%</td>
        <td>5%</td>
    </tr>
    <td>Actividad 2</td>
    <td>${datos.actividades[1].actividad}</td>
    <td>${datos.actividades[1].estadouiux}</td>
    <td>${datos.actividades[1].estadotecnico}</td>

    </tr>
    <tr>
        
        <td>10%</td>
        <td>5%</td>
    </tr>
    <td>Actividad 3</td>
    <td>${datos.actividades[2].actividad}</td>
    <td>${datos.actividades[2].estadouiux}</td>
    <td>${datos.actividades[2].estadotecnico}</td>

    </tr>
    <tr>
        
        <td>10%</td>
        <td>5%</td>
    </tr>


    

</table>
</div>
<div class="Estados">
<h2><a href="">Html</a></h2>
<h2><a href="">CSS</a></h2>
<h2><a href="">JS</a></h2>
<h2><a href="">UI</a></h2>
<h2><a href="">UX</a></h2>
<h2><a href=""><img src="/images/user-solid.svg" alt=""></a></h2>
</div>

</div>`

}
const p1 = document.getElementById("ficha").innerHTML = datosEstudiantes.map(Plantilla).join("");