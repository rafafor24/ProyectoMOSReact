*************************************************************************
***      Minimizing the number of hops in a directed graph            ***
***                                                                   ***
***      Authors: Rafael Forero 201514185                             ***
***               Jorleidis Monsalvo 201621171                        ***
*************************************************************************

Sets
  i   horas / h1*h32 /
  j   dias / d1*d5 /

***
$include "D:\Web\ProyectoMOSGit\ProyectoMOSReact\gams\horario.txt"
$include "D:\Web\ProyectoMOSGit\ProyectoMOSReact\gams\productividad.txt"

Variables
  x(i,j,k)      Media hora i en dia j en materia k se debe estudiar la materia.
  z           Objective function  ;

Binary Variable x;

Equations
objectiveFunction        objective function;


objectiveFunction                                  ..  z =e= sum((i,j,k), x(i,j,k) * p(i,j));


Model model1 /all/ ;
option mip=CPLEX
Solve model1 using mip minimizing z;

Display h;
Display p;
Display x.l;
Display z.l;
*$offtext

$ontext
Display i;
Display coorX;
Display coorY;
Display dij;
Display c;
$offtext
