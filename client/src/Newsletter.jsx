import React from "react";
import { Button, Form } from "react-bootstrap";

const Newsletter = () => {
  return (
    <>
    <div className ="cover" style={{backgroundImage: `url("http://i.ibb.co/jgZph3V/fondo.png")`}}>
      <div className="ml-5">
        <Form
          method="post"
          action="https://ymlp.com/subscribe.php?id=gyuwbbegmgj"
        >
          <h2 className="mt-2 parH">¡Complete su dirección de email</h2>
          <h2 className="parH">para recibir nuestro newsletter!</h2>
          <div>
            <h4 className="mt-5 parH">Dirección de Email:</h4> 
            <input className="mt-3 rounded" type="email" name="YMP0" placeholder="   Ingrese su email aqui" size={20} />
            <div className="mt-3">
            <Button className="ml-5 mt-1" variant="flat" type="submit" value="Enviar">Enviar</Button>
            </div>
          </div>
        </Form>
      </div>
    </div>
    </>
  );
};

export default Newsletter;