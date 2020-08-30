import React, { Component } from "react";
import Swal from "sweetalert2";

import Utils from "../../utils";
import eCommerceData from "./eCommerce-data";
import "./ECommerce.scss";

/// La direccion de su contrato acá ///////////////////////////////////
const contractAddress = "41A03ED915BAAA7C556C0A9624B3130E74162453F4";
// base85v = "TQaWQWLW8Nz8Nf9qnAxQZLMCNvPQEa81BT"
// hex = "41A03ED915BAAA7C556C0A9624B3130E74162453F4"
///////////////////////////////////////////////////////////////////////

export default class ECommerce extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataLength: eCommerceData.length,
      allItems: [],
      totalItems: 0
    };

    this.addItem = this.addItem.bind(this);
    this.buyItem = this.buyItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
    this.checkItemsTotal = this.checkItemsTotal.bind(this);
    this.startEventListeners = this.startEventListeners.bind(this);
  }



  async componentDidMount() {
    await Utils.setContract(window.tronWeb, contractAddress);
    this.startEventListeners();
  }

  addItem() {
    const { totalItems, dataLength, allItems } = this.state;

    if (totalItems >= dataLength) {
      Swal({
        title: "No hay más items que agregar.",
        type: "error"
      });
      return;
    }

    let item = eCommerceData[totalItems];
    item.price = parseFloat(Math.random() * 10).toFixed(0);
    item.id = totalItems;

    allItems.push(
      <div className="eCommerce-item" key={item.id}>
        <img className="item-image" src={item.image} alt={item.name} />
        <div className="item-name">{item.name}</div>
        <div className="price-buy-container">
          <div className="item-price">{item.price} TRX</div>
          <button
            className="buy-button btn btn-success"
            onClick={() => this.buyItem(item.id, item.price)}
          >
            Comprar
          </button>
          <button
            className="buy-button btn btn-warning"
            onClick={() => this.checkItem(item.id)}
          >
            verificar
          </button>
        </div>
      </div>
    );

    this.setState({
      totalItems: totalItems + 1
    });

    Utils.contract.addItem(item.name, item.price).send({
      shouldPollResponse: true
    });
  }

  async checkItemsTotal() {
    Utils.contract.checkItemsTotal().send({
      callValue: 0
    });

    let checkTotal = await Utils.contract.Total().watch((err, { result }) => {
      if (err) return console.log("falló al escuchar el evento", err);
      if (result) {
        Swal.fire({
          title: `este contrato tiene ${result.totalItems} items.`,
          type: "Exitoso"
        });
        checkTotal.stop();
      }
    });
  }

  async checkItem(id) {
    Utils.contract.checkItem(id).send({
      callValue: 0
    });

    let checkAvailability = await Utils.contract
      .Availability()
      .watch((err, { result }) => {
        if (err) return console.log("falló al escuchar el evento", err);
        if (result) {
          Swal.fire({
            title: `Disponible: ${result.available}.`,
            type: result.available ? "Exitoso" : "error"
          });
          checkAvailability.stop();
        }
      });
  }

  buyItem(id, price) {
    Utils.contract.buyItem(id).send({
      shouldPollResponse: true,
      callValue: price * 1000000 // convertir a SUN
    });
  }

  startEventListeners() {
    Utils.contract.Purchased().watch((err, { result }) => {
      if (err) return console.log("falló al escuchar el evento", err);
      if (result) {
        Swal.fire({
          title: `${result.name} ha sido comprador por ${result.price}.`,
          html:
            `<p>Vendedor: ${result.seller}</p><p>Comprador: ${result.buyer}</p>`,
          type: "Completado"
        });
      }
    });

    Utils.contract.Added().watch((err, { result }) => {
      if (err) return console.log("falló al escuchar el evento", err);
      if (result) {
        Swal.fire({
          title: `${result.name} ha sido añadido por ${result.price}.`,
          html:
            `<p>Vendedor: ${result.seller}</p>` +
            `<p>Añadido: ${result.exists}</p>` +
            `<p>Disponible: ${result.available}</p>`,
          type: "Completado"
        });
      }
    });
  }

  render() {
    const { allItems, totalItems } = this.state;
    return (
      <div className="eCommerce-component-container">
        <div className="eCommerce-component-dash">
          <div>Total Items en la tienda: {totalItems}</div>
          <button className="btn btn-primary" onClick={this.checkItemsTotal}>Ver todos los items</button>
          <button className="btn btn-primary" onClick={this.addItem}>Añadir Item</button>
        </div>
        <div className="eCommerce-item-container">{allItems}</div>
      </div>
    );
  }
}

