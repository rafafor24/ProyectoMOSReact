import React, { Component } from "react";
import Column from "./Column";
import Materia from "./Materia";
import Productividad from "./Productividad";
import "./App.css";

function horarioBase(horainicio) {
  var aret = [
    {
      cards: [
        { name: "-Hora" },
        { name: "-Lunes" },
        { name: "-Martes" },
        { name: "-Miercoles" },
        { name: "-Jueves" },
        { name: "-Viernes" }
      ]
    }
  ];
  // 7:00am 7:30am 8:00am
  var medias = "";
  var ampm = "am";
  var i;
  for (i = 0; i < 32; i++) {
    var astring = Math.floor(horainicio + i / 2);

    if (i % 2 === 0) {
      medias = ":00";
    } else {
      medias = ":30";
    }

    if (astring >= 12) {
      ampm = "pm";
    }
    aret.push({
      cards: [
        { name: "- " + astring + medias + ampm },
        { name: "0" },
        { name: "0" },
        { name: "0" },
        { name: "0" },
        { name: "0" }
      ]
    });
  }
  return aret;
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: horarioBase(7),
      value: 5,
      materias: [
        {
          id: 0,
          nombre: "Disponible",
          creditos: 0
        }
      ],
      selection: 0,
      productividad: 1,
      prods: [
        { id: 0, name: "Mejor en la Noche" },
        { id: 1, name: "Mejor en la Mañana" }
      ],
      xpress: "1.9.2-1.10.2-1.11.2-1.12.1-1.13.1-1.14.1-1.20.5-1.21.2-1.22.4-1.23.2-1.24.4-1.25.3-1.26.4-1.27.3-1.28.4-1.29.1-1.30.3-1.31.3-1.32.3-2.3.4-2.4.4-2.5.4-2.12.1-2.13.1-2.14.1-2.20.5-2.21.5-2.22.3-2.23.3-2.24.1-2.25.1-2.26.3-2.27.3-2.28.3-2.29.1-2.30.1-2.31.2-2.32.2-3.9.2-3.10.2-3.11.2-3.12.1-3.13.1-3.14.1-3.15.3-3.16.3-3.17.3-3.22.5-3.23.5-3.24.2-3.25.3-3.26.2-3.27.2-3.28.5-3.29.2-3.30.5-3.31.4-3.32.5-4.9.2-4.10.2-4.11.2-4.12.5-4.13.5-4.14.5-4.21.2-4.22.3-4.23.3-4.24.1-4.25.5-4.26.1-4.27.1-4.28.4-4.29.4-4.30.4-4.31.4-4.32.1-5.3.4-5.4.4-5.5.4-5.12.5-5.13.5-5.14.5-5.15.3-5.16.3-5.17.3-5.22.5-5.23.5-5.24.4-5.25.3-5.26.3-5.27.3-5.28.3-5.29.4-5.30.3-5.31.4-5.32.5",
      nombreactual: "Nombre,Creditos",
      colors: [
        { color: "#5bc0de" },
        { color: "#DC143C" },
        { color: "#0000CD" },
        { color: "#8A2BE2" },
        { color: "#FFD700" },
        { color: "#32CD32" },
        { color: "#FF4500" },
        { color: "#40E0D0" }
      ]
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.handleChangeXpress = this.handleChangeXpress.bind(this);
    this.handleSubmitXpress = this.handleSubmitXpress.bind(this);

    this.handleChangeMat = this.handleChangeMat.bind(this);
    this.handleSubmitMat = this.handleSubmitMat.bind(this);

    this.resetHorario = this.resetHorario.bind(this);
  }

  handleChange(event) {
    console.log(event);
    this.setState({ value: event.target.value });
  }

  handleChangeXpress(event) {
    this.setState({ xpress: event.target.value });
    //console.log(this.state.xpress);
  }

  handleChangeMat(event) {
    console.log(event);
    this.setState({ nombreactual: event.target.value });
    console.log(this.state.nombreactual);
  }

  handleSubmitMat(event) {
    //console.log(event.target.value);
    event.preventDefault();
    this.setState(prevState => {
      const { materias } = prevState;
      var array = this.state.nombreactual.split(",");
      //console.log(this.state.selection);
      materias[this.state.selection].nombre = array[0];
      materias[this.state.selection].creditos = array[1];
      return { materias };
    });
  }

  handleSubmitXpress(event) {
    //alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();

    this.setState(prevState => {
      const { columns } = prevState;

      var array = this.state.xpress.split("-");
      //console.log(array);
      var i;
      for (i of array) {
        var array2 = i.split(".");
        //console.log(array2);
        //console.log("1: "+parseInt(array2[1])+" 0:"+parseInt(array2[0])+" 2: "+parseInt(array2[2])) ;
        columns[parseInt(array2[1])].cards[parseInt(array2[0])].name =
          array2[2];
      }
      return { columns };
    });
  }

  handleSubmit(event) {
    //alert("Numero de materias: " + this.state.value);
    event.preventDefault();

    this.setState(prevState => {
      var { materias } = prevState;

      var i;
      var matTemp = [];
      matTemp.push({
        id: 0,
        nombre: "Disponible",
        creditos: 0
      });

      for (i = 1; i <= this.state.value; i++) {
        matTemp.push({
          id: i,
          nombre: "Materia " + i,
          creditos: 3
        });
      }
      materias = matTemp;
      return { materias };
    });
  }

  handleOptionChange(event) {
    this.setState({
      selection: event
    });
  }

  handleOptionChangeProd(event) {
    this.setState({
      productividad: event
    });
  }

  handleClick = (columnIndex, cardIndex) => {
    console.log(
      "........" +
        columnIndex +
        "......." +
        cardIndex +
        "selection:" +
        this.state.selection
    );
    this.setState(prevState => {
      const { columns } = prevState;
      columns[columnIndex].cards[cardIndex].name = "" + this.state.selection;
      return { columns };
    });
  };

  printInfo = event => {
    this.setState(prevState => {
      const { columns } = prevState;
      const { materias } = prevState;
      const { productividad } = prevState;
      console.log(columns);

      var string1 = "horario::(";
      var string2 = ",1.." + materias.length + ")[";
      var res = "";
      var i, j, k;
      var dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
      for (i = 1; i < 6; i++) {
        res += "!Dia " + dias[i - 1] + "\n";
        for (j = 1; j < 33; j++) {
          res += string1 + i + "," + j + string2;
          for (k = 1; k < materias.length - 1; k++) {
            //console.log("i:"+i+" j:"+j+" k:"+k);
            res += columns[j].cards[i].name === "" + (k + 1) ? "1" : "0";
            //console.log(columns[j].cards[i].name === ""+k + 1 ? "1" : "0");
            console.log(
              "i:" + i + " j:" + j + "colji:" + columns[j].cards[i].name
            );
            res += ",";
          }
          res += columns[j].cards[i].name === "" + materias.length ? "1" : "0";
          res += "]\n";
        }
      }
      console.log(res);

      var s1 = "p::(";
      var s2 = "1..32)[";
      var product = [];
      var paso = 1 / 32;
      var res2 = "";
      for (i = 0; i < 32; i++) {
        product.push(paso * i);
      }
      if (productividad === 1) {
        product.reverse();
      }
      for (i = 1; i < 6; i++) {
        res2 += "!Dia " + dias[i - 1] + "\n";
        res2 += s1 + i + "," + s2;
        for (j = 1; j < 32; j++) {
          res2 += product[j - 1] + ",";
        }
        res2 += product[31] + "]\n";
      }
      console.log(res2);

      document.getElementById("printinfo").innerHTML = res + "\n" + res2;
      //alert(res+"\n"+res2)
      return { columns };
    });
  };

  resetHorario(event) {
    this.setState({
      columns: horarioBase(7)
    });
  }

  render() {
    return (
      <div className="row text-center">
        <div className="col">
          <h1>Formulario</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <h5>Numero de materias:</h5>
              <input
                type="number"
                className="form-control-lg"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
            <input
              className="btn btn-success btn-lg btn-block"
              type="submit"
              value="Crear Materias"
            />
          </form>
          <hr />
          <h1>Materias</h1>
          <form>
            {!(this.state.materias.length > 0) && (
              <h5>No se han creado materias aun, Use "Crear Materias".</h5>
            )}
            {this.state.materias.map((materia, materiaIndex) => (
              <Materia
                materia={materia}
                materiaIndex={materiaIndex}
                key={materiaIndex}
                selected={this.state.selection}
                handleOptionChange={() => this.handleOptionChange(materia.id)}
              />
            ))}
          </form>

          <form onSubmit={this.handleSubmitMat}>
            <label>
              <h5>Actualizar Info Materia Seleccionada:</h5>
              <input
                type="text"
                className="form-control-lg"
                value={this.state.nombreactual}
                onChange={this.handleChangeMat}
              />
            </label>
            <input
              className="btn btn-success btn btn-block text-center"
              type="submit"
              value="Actualizar Nombre"
            />
          </form>

          <hr />
          <h1>Productividad</h1>
          {this.state.prods.map((prod, prodIndex) => (
            <Productividad
              productividad={this.state.productividad}
              prod={prod}
              key={prodIndex}
              prodIndex={prodIndex}
              handleOptionChangeProd={() =>
                this.handleOptionChangeProd(prod.id)
              }
            />
          ))}
          <button
            type="button"
            className="btn btn-success btn-lg btn-block"
            onClick={this.printInfo}
          >
            Print Info Xpress
          </button>
          <hr />
        </div>

        <div className="col">
          <h1>Horario</h1>
          <table>
            <tbody>
              {this.state.columns.map((column, columnIndex) => (
                <Column
                  column={column}
                  columnIndex={columnIndex}
                  materias={this.state.materias}
                  key={columnIndex}
                  colors={this.state.colors}
                  onClick={cardIndex =>
                    this.handleClick(columnIndex, cardIndex)
                  }
                />
              ))}
            </tbody>
          </table>
        </div>

        <div className="col">
          <h1>Resultado</h1>
          <form onSubmit={this.handleSubmitXpress}>
            <label>
              <h5>Resultado de Xpress:</h5>
              <textarea
                type="text"
                className="form-control-lg"
                value={this.state.xpress}
                onChange={this.handleChangeXpress}
                width="500"
              />
            </label>
            <input
              className="btn btn-primary btn-lg btn-block"
              type="submit"
              value="Mostrar Resultado"
            />
          </form>
          <button
            type="button"
            className="btn btn-danger btn-lg btn-block"
            onClick={this.resetHorario}
          >
            RESET
          </button>
        </div>
      </div>
    );
  }
}

export default App;
