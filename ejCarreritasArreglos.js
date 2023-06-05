var corredores = ["Roberto", "Andrea", "Jorge", "Ramiro", "Sofia", "Jose"];

alert("Los Corredores son: " + corredores.join("- -"));

alert("1ra vuelta " + corredores[2] + " Adelanta a " + corredores[0]);

vuelta1 = corredores.unshift("Jorge");
vuelta_1 = corredores.splice(3,1);
alert("Las posiciones ahora son " + corredores.join("- -"));


vuelta2 = corredores.unshift("Ramiro");
vuelta_2 = corredores.splice(4,1);
alert("2da vuelta las pociones son: " + corredores.join("- -") );


vuelta_3 = corredores.splice(2,3);
vuelta_3 = corredores.splice (2,0, "Sofia", "Andrea");

alert("3ra vuelta las pociones son: " + corredores.join("- -") );

alert("Las posiciones quedan: " + corredores.join("- -"));



