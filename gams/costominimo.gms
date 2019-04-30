*************************************************************************
***      Minimizing the number of hops in a directed graph            ***
***                                                                   ***
***      Authors: Rafael Forero 201514185                             ***
***               Jorleidis Monsalvo 201621171                        ***
*************************************************************************

Sets
  i   network nodes / n1*n7 /

alias(j,i);

$include "C:\2019-1\Modelado, Simulacion\Taller2\exp.txt"

Variables
  x(i,j)      Indicates if the link i-j is selected or not.
  z           Objective function  ;

Binary Variable x;

Equations
objectiveFunction        objective function
sourceNode(i)            source node
destinationNode(j)       destination node
intermediateNode         intermediate node;

objectiveFunction                                  ..  z =e= sum((i,j), c(i,j) * x(i,j));

sourceNode(i)$(ord(i) = 1)                         ..  sum((j), x(i,j)) =e= 1;

destinationNode(j)$(ord(j) = 7)                    ..  sum((i), x(i,j)) =e= 1;

intermediateNode(i)$(ord(i) <> 1 and ord(i) ne 7)  ..  sum((j), x(i,j)) - sum((j), x(j,i)) =e= 0;

Model model1 /all/ ;
option mip=CPLEX
Solve model1 using mip minimizing z;

Display c;
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
