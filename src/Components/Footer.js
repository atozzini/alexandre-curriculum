import React, { Component } from 'react';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (

      <div className="pt-4 my-md-5 pt-md-5 border-top">
        <div className="row">
          <div className="col-12 col-md">
            <img className="mb-2" src="../../assets/brand/bootstrap-solid.svg" alt="" width="24" height="24" />
            <small className="d-block mb-3 text-muted">&copy; 2023-2023</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Algo legal</a></li>
              <li><a className="text-muted" href="#">Feature aleatória</a></li>
              <li><a className="text-muted" href="#">Recursos para times</a></li>
              <li><a className="text-muted" href="#">Coisas para desenvolvedores</a></li>
              <li><a className="text-muted" href="#">Outra coisa legal</a></li>
              <li><a className="text-muted" href="#">Último item</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Fontes</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Fonte</a></li>
              <li><a className="text-muted" href="#">Nome da fonte</a></li>
              <li><a className="text-muted" href="#">Outra fonte</a></li>
              <li><a className="text-muted" href="#">Fonte final</a></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Sobre</h5>
            <ul className="list-unstyled text-small">
              <li><a className="text-muted" href="#">Equipe</a></li>
              <li><a className="text-muted" href="#">Locais</a></li>
              <li><a className="text-muted" href="#">Privacidade</a></li>
              <li><a className="text-muted" href="#">Termos</a></li>
            </ul>
          </div>
        </div>
      </div>

    );
  }
}

export default Footer;
