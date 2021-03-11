import React from "react";

export const Contact = () => {
  return (
    <>
      <div className="body-contacto">
        <div className="container">
          <form>
            <h2>Contacto</h2>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="first">Nombre y Apellido:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre y Apellido"
                    id="first"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label for="phone">Celular:</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    placeholder="Numero de celular"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label for="email">Correo electronico</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
            <div className="form-group">
              <label for="exampleFormControlTextarea1">Mensaje</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Example Textarea"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-contacto">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};