import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TerminarCompra = () => {
  return (
    <div className="container">
      <div className="mensajeCompra">
        
        <p>GRACIAS POR SU COMPRA !!!</p>
       
        <Link to={`/`}>
          <Button className="buttonSize" variant="dark">
            Volver al Home
          </Button>
        </Link>
      </div>
    </div>
  );
};
export default TerminarCompra;